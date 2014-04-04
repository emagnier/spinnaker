module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('syncAssets', [
    'jst:compile',
    'less:dev',
    'sync:dev',
    'coffee:dev'
  ]);
};
