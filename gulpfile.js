// Packages.
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Paths.
var paths = {
  styles: {
    input: 'src/styles/**/*.scss',
    output: 'dist/styles/'
  }
};

// Styles.
gulp.task('styles', function () {
  gulp.src(paths.styles.input)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], remove: false, cascade: false }))
    .pipe(sourcemaps.write('.'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.output));
});

// Build
gulp.task('build', ['styles'], function () {
  console.log('Environment: DEV');
});

// Watch
gulp.task('watch', function () {
  gulp.watch(paths.styles.input, ['styles']);
});

// Default
gulp.task('default', ['build']);
