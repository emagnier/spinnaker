module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('linkAssetsBuildProd', [
    'sails-linker:prodJsRelative',
    'sails-linker:prodStylesRelative',
    'sails-linker:devTpl'
  ]);
};
