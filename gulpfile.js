'use strict';

var gulp = require('gulp');
var fs = require('fs');


var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del', 'imagemin-*']
});

var path = {
  src: {
    less: './less/**/*.less',
    svg: './flags/**/*.svg'
  },
  dest: {
    flags: {
      png: './dist/flags/png',
      svg: './dist/flags'
    }
  }
};

// preparing /////////////////////////////////////////////

gulp.task('download', function() {
  var flagSource = require('./flag_source.json');
  Object.keys(flagSource).forEach(function(key) {
    var url = flagSource[key];
    if (url) {
      $.download(url)
        .pipe($.rename({basename: key}))
        .pipe(gulp.dest('./src/flags/'));
    }
  });
});

gulp.task('svg', function() {
  return gulp.src(path.src.svg)
  .pipe(gulp.dest(path.dest.flags.svg))
  .pipe($.size());
});

gulp.task('svg2png', function() {
  return gulp.src(path.src.svg)
  .pipe($.newer({
    dest: path.dest.flags.png,
    ext: '.png'
  }))
  .pipe($.svg2png())
  // .pipe($.imagemin({
  //   use: [$.pngquant()]
  // }))
  .pipe(gulp.dest(path.dest.flags.png))
  .pipe($.size());
});

gulp.task('svg2png-small', function() {
  return gulp.src(path.src.svg)
  .pipe($.newer({
    dest: path.dest.flags.png,
    ext: '.png'
  }))
  .pipe($.svg2png())
  .pipe($.gm(function (gmfile) {
    return gmfile.resize(100);
  }))
  .pipe($.rename({suffix: '-100px'}))
  .pipe(gulp.dest(path.dest.flags.png))
  .pipe($.size());
});

gulp.task('png', ['svg2png', 'svg2png-small']);

gulp.task('flags', ['svg', 'png']);

// building /////////////////////////////////////////////

gulp.task('less-merge', function() {
  gulp.src(['./less/**/variable.less', './less/**/flag-core.less', './less/**/flag-list.less'])
  .pipe($.stripCssComments())
  .pipe($.concat('flag-css.less'))
  .pipe(gulp.dest('./dist/'))
  .pipe($.size());
});

gulp.task('css', function() {
  gulp.src('./src/less/**/flag-css.less')
  .pipe($.less({}))
  .pipe($.stripCssComments())
  .pipe(gulp.dest('./dist/'))
  .pipe($.size());
});

gulp.task('css-min', function() {
  gulp.src('./less/**/flag-css.less')
  .pipe($.less({}))
  .pipe($.minifyCss({}))
  .pipe($.rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/'))
  .pipe($.size());
});

gulp.task('compile', ['less-merge', 'css', 'css-min']);

// zipping //////////////////////////////////////////////

gulp.task('zip-png', function() {
  gulp.src(['./dist/**/*', '!./dist/**/*.zip'])
  .pipe($.zip('archive.zip'))
  .pipe(gulp.dest('./dist/'))
  .pipe($.size());
});

gulp.task('zip-nopng', function() {
  gulp.src(['./dist/**/*', '!./dist/**/*.zip', '!./dist/**/*.png'])
  .pipe($.zip('archive-nopng.zip'))
  .pipe(gulp.dest('./dist/'))
  .pipe($.size());
});

gulp.task('zip', ['zip-png', 'zip-nopng']);

/////////////////////////////////////////////////////////

gulp.task('templates', function(){
  var opts = {
    comments: true,
    conditionals: true,
    spare:true
  };

  fs.readFile('./README.md', {encoding: 'utf-8', flag: 'rs'}, function(e, data) {
    if (e) {
      return console.log(e);
    }
    gulp.src(['index-tpl.html'])
      .pipe($.replace(/__README__/g, data.replace(/\n/g, '\\n').replace(/\"/g, '\\"').replace(/\'/g, '\\\'')))
      .pipe($.rename({basename: 'index'}))
      .pipe($.minifyHtml(opts))
      .pipe(gulp.dest('./'))
      .pipe($.size());
  });
});

gulp.task('license', function() {
  gulp.src(['./dist/**/*.js', './dist/**/*.css', './dist/**/*.less'])
  .pipe($.license('MIT', {organization: 'kf (7kfpun@gmail.com)'}))
  .pipe(gulp.dest('./dist/'))
  .pipe($.size());
});

gulp.task('clean', function(done) {
  $.del(['.tmp', 'dist'], done);
});

gulp.task('build', ['flags', 'compile', 'zip', 'templates'], function() {
  gulp.start('license');
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});

gulp.task('run', function() {
  gulp.src('./')
  .pipe($.webserver({
    livereload: true,
    // directoryListing: true,
    open: true
  }));
});
