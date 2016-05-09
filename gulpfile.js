
'use strict';

require('require-dir')('gulp-tasks');

var gulp = require('gulp-task-doc');
var runSequence = require('run-sequence');


// Show help about all tasks
gulp.task('help', gulp.help());


gulp.task('default', ['clean'], function(cb) {
  //Build production website
  runSequence(
    ['copy', 'styles'],
    'html',
    'vulcanize',
    cb);
});
