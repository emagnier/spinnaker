module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:compile',
    'less:dev',
    'copy:dev',
    'coffee:dev'
  ]);
};
