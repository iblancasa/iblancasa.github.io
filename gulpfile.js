
'use strict';

require('require-dir')('gulp-tasks');

var gulp = require('gulp-task-doc');
var runSequence = require('run-sequence');
var packageJson = require('./package.json');
var dist = require('./gulp-tasks/dist_path');
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');
var glob = require('glob-all');

// Show help about all tasks
gulp.task('help', gulp.help());


gulp.task('default', ['clean'], function(cb) {
  //Build production website
  runSequence(
    ['copy', 'styles',
    'html',
    'vulcanize',
    'html-element',
    'cache-config'],
    cb);
});


gulp.task('cache-config', function(callback) {
  var dir = dist();
  var config = {
    cacheId: packageJson.name || path.basename(__dirname),
    disabled: false
  };

  glob([
    'index.html',
    './',
    'bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '{elements,scripts,styles}/**/*.*'],
    {cwd: dir}, function(error, files) {
    if (error) {
      callback(error);
    } else {
      config.precache = files;

      var md5 = crypto.createHash('md5');
      md5.update(JSON.stringify(config.precache));
      config.precacheFingerprint = md5.digest('hex');

      var configPath = path.join(dir, 'cache-config.json');
      fs.writeFile(configPath, JSON.stringify(config), callback);
    }
  });
});
