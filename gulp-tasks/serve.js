
'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var browserSync = require('browser-sync').create();//Server and browser sync
var reload      = browserSync.reload;


gulp.task('serve', function(){
  //Run a serve
     browserSync.init({
         server: {
             baseDir: "app"
         }
     });

     gulp.watch(["app/*","app/data/**", "app/elements/**"]).on("change", reload);
});
