module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('default', [
    'compileAssets',
    'linkAssets',
    'watch'
  ]);
};
