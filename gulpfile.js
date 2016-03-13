var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  processhtml = require('gulp-processhtml'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  htmlmin = require('gulp-htmlmin'),
  del = require('del'),
   opts = { /* plugin options */ };

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

// Static server
gulp.task('serve-dev', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('build', function() {
  //clean build
  del('dist');

  gulp.src([
    'favicon/**/*',
    'images/**/*'
  ]).pipe(gulp.dest('dist/images'));

  gulp.src(['bower_components/github-fork-ribbon-css/gh-fork-ribbon.css']).pipe(
    gulp.dest('dist/css')
  )

  gulp.src('js/*.js')
  .pipe(concat("index.min.js"))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));

  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'));

  gulp.src('./index.html')
                 .pipe(processhtml(opts))
                 .pipe(htmlmin({
                   collapseWhitespace: true,
                   removeScriptTypeAttributes: true
                 }))
                 .pipe(gulp.dest('dist'))
});
