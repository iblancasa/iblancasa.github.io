'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var vulcanize = require('gulp-vulcanize');//Vulcanization
var size = require('gulp-size');//Size of folders and dirs


var dist = require('./dist_path');

// Vulcanize the app
gulp.task('vulcanize', function() {
  return gulp.src('app/elements/granada-geek/granada-geek.html')
    .pipe(vulcanize({
      inlineScripts: true,
      stripComments: true,
      inlineCss: true
    }))
    .pipe(gulp.dest(dist('elements/granada-geek')))
    .pipe(size({title: 'vulcanization'}));
});
