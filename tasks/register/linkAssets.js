module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('linkAssets', [
        'sails-linker:devJs',
        'sails-linker:devStyles',
        'sails-linker:devTpl'
    ]);
};
