

'use strict';

var path = require('path');//Get path


var dist_path = function(subpath) {
  var DIST = 'dist';
  return !subpath ? DIST : path.join(DIST, subpath);
};

module.exports = dist_path;
