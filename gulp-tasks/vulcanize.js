'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var vulcanize = require('gulp-vulcanize');//Vulcanization
var size = require('gulp-size');//Size of folders and dirs


var dist = require('./dist_path');

// Vulcanize the app
gulp.task('vulcanize', function() {
  return gulp.src(
    ['app/elements/iblancasa-app/iblancasa-app.html',
    'app/elements/iblancasa-app/events-page.html',
    'app/elements/iblancasa-app/inicio.html',
    'app/elements/iblancasa-app/sobre-mi.html'
    ])
    .pipe(vulcanize({
      inlineScripts: true,
      stripComments: true,
      inlineCss: true
    }))
    .pipe(gulp.dest(dist('elements/iblancasa-app')))
    .pipe(size({title: 'vulcanization'}));
});