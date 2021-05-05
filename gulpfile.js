const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const sync = require('browser-sync').create();
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const nunjucksRender = require('gulp-nunjucks-render');

function html() {
  return src('./src/pages/**.njk')
    .pipe(nunjucksRender({
      path: ['./src/templates/']
    }))
    .pipe(dest('./'))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('./dist'))
}

function js() {
  return src('./src/js/**.js')
  .pipe(dest('./dist/js'))
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(dest('./dist/js'))
}

function scss() {
  return src('./src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('index.css'))
    .pipe(dest('./dist/css'))
    .pipe(csso())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('./dist/css'))
}

function img() {
  return src('./src/img/*')
  .pipe(imagemin([
    imagemin.mozjpeg({
      quality: 75,
      progressive: true
    }),
    imagemin.optipng({
      optimizationLevel: 5
    })
  ]))
  .pipe(dest('./dist/img'))
}

function clear() {
  return del('dist')
}

function serve() {
  sync.init({
    server: './dist'
  })

  watch('./src/pages/**.njk', series(html)).on('change', sync.reload);
  watch('./src/scss/**.scss', series(scss)).on('change', sync.reload);
  watch('./src/js/**.js', series(js)).on('change', sync.reload);
}

exports.serve = series(clear, js, scss, html, js, img, serve);
exports.build = series(clear, js, scss, html, js, img);
exports.clear = clear;