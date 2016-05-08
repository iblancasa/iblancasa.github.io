'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var cleanCSS = require('gulp-clean-css');//Clean and compress CSS
var path = require('path');//Get path
var size = require('gulp-size');//Size of folders and dirs

var dist = require('./dist_path');

// Compile styles
gulp.task('styles', function() {
  var stylesPath = 'styles';

  return gulp.src(['**/*.css'].map(function(src) {
      return path.join('app', stylesPath, src);
    }))
    .pipe(gulp.dest('.tmp/' + stylesPath))
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist(stylesPath)))
    .pipe(size({title: stylesPath}));
});
