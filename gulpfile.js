'use strict';

var exec = require('child_process').exec;
var fs = require('fs');
var gulp = require('gulp');

var AWS = {
  "key":    process.env.AWS_ACCESS_KEY_ID,
  "secret": process.env.AWS_SECRET_ACCESS_KEY,
  "bucket": "flag-css",
  "region": "us-west-2"
}

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

gulp.task('svg-download', function() {
  var flagSource = require('./flag_source.json');
  Object.keys(flagSource).forEach(function(key) {
    var url = flagSource[key];
    if (url) {
      $.download(url)
        .pipe($.rename({basename: key}))
        .pipe(gulp.dest(path.dest.flags.svg))
        .pipe($.size());
    }
  });
});

gulp.task('svg-min', function(cb) {
  exec(`./node_modules/svgo/bin/svgo -f ${path.dest.flags.svg}`, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('svg2png', function() {
  return gulp.src(path.src.svg)
  .pipe($.newer({
    dest: path.dest.flags.png,
    ext: '.png'
  }))
  .pipe($.svg2png())
  .pipe($.imagemin())
  .pipe(gulp.dest(path.dest.flags.png))
  .pipe($.size());
});

gulp.task('svg2png-small', function() {
  return gulp.src(path.src.svg)
  .pipe($.filter('**/*.svg'))
  // .pipe($.newer({
  //   dest: path.dest.flags.png,
  //   ext: '.png'
  // }))
  .pipe($.svg2png())
  .pipe($.imagemin())
  .pipe($.gm(function (gmfile) {
    return gmfile.resize(150);
  }))
  // .pipe($.rename({suffix: '-100px'}))
  .pipe($.flatten())
  .pipe(gulp.dest(path.dest.flags.png))
  .pipe($.size());
});

gulp.task('svg', ['svg-download', 'svg-min']);

gulp.task('png', ['svg2png-small']);

gulp.task('flags', ['svg', 'png']);

// building /////////////////////////////////////////////

gulp.task('less', function() {
  gulp.src('./less/**/*.less')
  .pipe($.stripCssComments())
  .pipe(gulp.dest('./dist/less'))
  .pipe($.size());
});

gulp.task('css', function() {
  gulp.src('./less/**/flag-css.less')
  .pipe($.less({}))
  .pipe($.stripCssComments())
  .pipe(gulp.dest('./dist/css'))
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

gulp.task('scss',function() {
  var variableFilter = $.filter('**/variable.scss', {restore: true});

  gulp.src('./less/**/*.less')
  .pipe($.lessToScss())
  .pipe(variableFilter)
  .pipe($.replace(';', ' !default;'))
  .pipe(variableFilter.restore)
  .pipe(gulp.dest('./dist/scss'))
  .pipe($.size());
});

gulp.task('compile', ['less', 'css', 'css-min', 'scss']);

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

gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare: true
  };
  var htmlFilter = $.filter('!*.tpl.html', {restore: true});

  fs.readFile('./README.md', {encoding: 'utf-8', flag: 'rs'}, function(e, data) {
    if (e) {
      return console.log(e);
    }
    gulp.src(['*.tpl.html'])
      .pipe($.replace(/__README__/g, data.replace(/\n/g, '\\n').replace(/\"/g, '\\"').replace(/\'/g, '\\\'')))
      .pipe($.rename(function(path) {
        path.basename = path.basename.replace('.tpl', '');
      }))
      .pipe($.minifyHtml(opts))
      .pipe(gulp.dest('./'))
      .pipe($.size());
  });
});

gulp.task('license', function() {
  gulp.src(['./dist/**/*.js', './dist/**/*.css', './dist/**/*.less', './dist/**/*.scss'])
  .pipe($.license('MIT', {organization: 'kf (7kfpun@gmail.com)'}))
  .pipe(gulp.dest('./dist/'))
  .pipe($.size());
});

gulp.task('clean', function(done) {
  $.del(['.tmp', 'dist'], done);
});

gulp.task('build', ['flags', 'compile', 'html'], function() {
  gulp.start('license');
  gulp.start('zip');
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

gulp.task('s3', () => {
  gulp.src('./dist/**')
    .pipe($.s3(AWS));
});
