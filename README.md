# Flag-css

CSS for SVG country flags with PNG failback. See the [demo](http://7kfpun.github.io/flag-css/).

> As a backend developer, I prefer **ISO_3166-1 alpha-3**.

  - All flags from [Wikimedia](http://commons.wikimedia.org/wiki/Category:SVG_sovereign_state_flags)
  - Use [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1), all alpha-2, alpha-3 and numeric are supported
  - Respect flag's original ratio
  - Flag-css CSS, LESS, and Sass files are licensed under the MIT License

### Usage

For using the flags inline with text add the classes `.flag` with `.flag-xxx` or `.flag-xx` (where `xxx` is the
[ISO 3166-1-alpha-3] or [ISO 3166-1-numeric] and xx is the [ISO 3166-1-alpha-2] of a country) to an empty `<span>`. Example:

    <span class="flag flag-hkg"></span>
    <span class="flag flag-hk"></span>
    <span class="flag flag-344"></span>

#### Sizing

    <span class="flag flag-hkg flag-2x"></span>
    <span class="flag flag-hkg flag-3x"></span>
    <span class="flag flag-hkg flag-4x"></span>
                      ⋮
                      ⋮
    <span class="flag flag-hkg flag-10x"></span>

#### Rotating and flipping

    <span class="flag flag-hkg flag-rotate-90"></span>
    <span class="flag flag-hkg flag-rotate-180"></span>
    <span class="flag flag-hkg flag-rotate-270"></span>
    <span class="flag flag-hkg flag-flip-horizontal"></span>
    <span class="flag flag-hkg flag-flip-vertical"></span>

### Todo's

  - Failback with **.png**
  - LESS, Sass and Scss are coming
  - 3×4 flag ratio available

### License

MIT

[ISO 3166-1-alpha-3]:http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
[ISO 3166-1-alpha-2]:http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[ISO 3166-1-numeric]:http://en.wikipedia.org/wiki/ISO_3166-1_numeric

### Development

Ubuntu:

    apt-get install imagemagick
    apt-get install graphicsmagick

Mac OS X (using Homebrew):

    brew install imagemagick
    brew install graphicsmagick
