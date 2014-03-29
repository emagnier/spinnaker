module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('build', [
    'compileAssets',
    'linkAssetsBuild',
    'clean:build',
    'copy:build'
  ]);
};
