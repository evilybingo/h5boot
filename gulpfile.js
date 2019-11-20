var gulp = require('gulp')
var uglify = require('gulp-uglify')
var cleanCSS = require('gulp-clean-css')
var htmlMin = require('gulp-htmlmin')
var rename = require('gulp-rename')
gulp.task('js', function () {
  return gulp
    .src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
gulp.task('css', function () {
  return gulp
    .src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
})
gulp.task('ttf', function () {
  return gulp
    .src('fonts/*.ttf')
    .pipe(gulp.dest('dist/fonts'))
})
gulp.task('html', function () {
  var opts = {
    collapseWhitespace: true,
    collapseTabs: true,
    collapseBooleanAttributes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
  }
  return gulp
    .src('index.html')
    .pipe(htmlMin(opts))
    .pipe(gulp.dest('dist'))
})
gulp.task('html-re', function () {
  return gulp
    .src('src/agreement/dist/share.html')
    .pipe(rename("share.ejs"))
    .pipe(gulp.dest('src/agreement/dist'))
})
gulp.task('build-w', function () {
  gulp.watch('src/share.js',gulp.series('build'))
  gulp.watch('src/default.css',gulp.series('build'))
  gulp.watch('src/share.html',gulp.series('build'))
})
gulp.task('build',gulp.series(
  'html',
  'css',
  'js',
  'ttf'
  // gulp.parallel(
  //     'html-re'
  // )
));