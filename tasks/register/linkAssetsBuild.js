module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('linkAssetsBuild', [
        'sails-linker:devJsRelative',
        'sails-linker:devStylesRelative',
        'sails-linker:devTpl'
    ]);
};
