const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass');
const image = require('gulp-image');
const build = require('gulp-build');
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
    .pipe(build())
    .pipe(dest('./dist'))
}

function js() {
  return src('./src/js/**.js')
  .pipe(build())
  .pipe(dest('./dist'))
}

function scss() {
  return src('./src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('index.css'))
    .pipe(dest('./dist'))
}

function img() {
  return src('./src/img/')
    .pipe(image())
    .pipe(dest('./dist'))
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

exports.serve = series(clear, img, js, scss, html, serve);
exports.clear = clear;