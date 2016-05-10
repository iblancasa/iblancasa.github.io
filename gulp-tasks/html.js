

'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var cleanCSS = require('gulp-clean-css');//Clean and compress CSS
var uglify = require('gulp-uglify');//Compress
var useref = require('gulp-useref');//File concatenation
var gulpIf = require('gulp-if');//Run tasks conditionally
var minifyHtml = require('gulp-minify-html');//Minify CSS
var size = require('gulp-size');//Size of folders and dirs

var dist = require('./dist_path');


// Optimization of HTML code
gulp.task('html', function() {
  return gulp.src(['app/**/*.html',
    '!app/{elements,bower_components}/**/*.html'])
    .pipe(useref({searchPath: ['.tmp', 'app']}))
    .pipe(gulpIf('*.js', uglify({//Concatenate and minify JavaScript
      preserveComments: 'none'
    })))
    .pipe(gulpIf('*.css', cleanCSS()))//Concatenate and minify CSS
    .pipe(gulpIf('*.html', minifyHtml({//Minify HTML files
      quotes: true,
      empty: true,
      spare: true
    })))
    .pipe(gulp.dest(dist()))
    .pipe(size({
      title: 'html'
    }));
});

// Optimization of element HTML code
gulp.task('html-element', function() {
  return gulp.src(['.temp/element/iblancasa-app.html'])
    .pipe(useref({searchPath: ['.tmp', 'app']}))
    .pipe(gulpIf('*.js', uglify({//Concatenate and minify JavaScript
      preserveComments: 'none'
    })))
    .pipe(gulpIf('*.css', cleanCSS()))//Concatenate and minify CSS
    .pipe(gulpIf('*.html', minifyHtml({//Minify HTML files
      quotes: true,
      empty: true,
      spare: true
    })))
    .pipe(gulp.dest(dist()+"/elements/iblancasa-app"))
    .pipe(size({
      title: 'html'
    }));
});
