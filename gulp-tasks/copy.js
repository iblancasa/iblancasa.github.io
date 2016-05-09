

'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var merge = require('merge-stream');//Merge dirs
var size = require('gulp-size');//Size of folders and dirs
var glob = require('glob-all');
var packageJson = require('../package.json');
var dist = require('./dist_path');
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');

// Copy necesary elements (that cannot be vulcanized) to the distribution folder
gulp.task('copy', function() {
  var app = gulp.src([
    'app/*',
    '!app/{elements,bower_components}'//No copy
  ], {
    dot: true
  }).pipe(gulp.dest(dist()));

  var bower = gulp.src([
     'app/bower_components/{webcomponentsjs,promise-polyfill}/**/*'
   ]).pipe(gulp.dest(dist('bower_components')));

   var img = gulp.src([
      'app/elements/iblancasa-app/images/**'
    ]).pipe(gulp.dest(dist('elements/iblancasa-app/images/')));

  return merge(app, bower, img)
    .pipe(size({
       title: 'copy'
     }));
 });

 // Generate config data for the <sw-precache-cache> element.
// This include a list of files that should be precached, as well as a (hopefully unique) cache
// id that ensure that multiple PSK projects don't share the same Cache Storage.
// This task does not run by default, but if you are interested in using service worker caching
// in your project, please enable it within the 'default' task.
// See https://github.com/PolymerElements/polymer-starter-kit#enable-service-worker-support
// for more context.
gulp.task('cache-config', function(callback) {
  var dir = dist();
  var config = {
    cacheId: packageJson.name || path.basename(__dirname),
    disabled: false
  };

  glob([
    'app/index.html',
    'app/',
    'bower_components/webcomponentsjs/webcomponents-lite.min.js',
    'app/{elements,styles}/**/*.*'],
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
