module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('syncAssets', [
    'jst:dev',
    'less:dev',
    'sync:dev',
    'coffee:dev'
  ]);
};
