

'use strict';

var gulp   = require('gulp-task-doc');//Gulp and document
var del = require('del');//Remove files

var dist = require('./dist_path');

// Clean generated files
gulp.task('clean', function() {
  return del(['.tmp', dist()]);
});
