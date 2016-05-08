'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var eslint = require('gulp-eslint');//Javascript linter


// Lint JavaScript
gulp.task('lint', function() {
  return gulp.src([
      'app/elements/**/*.html',
      'gulpfile.js',
      'gulp-tasks/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
