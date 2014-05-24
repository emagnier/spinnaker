module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('buildProd', [
        'compileProdAssets',
        'sails-linker:prodJsRelative',
        'sails-linker:prodStylesRelative',
        'sails-linker:devTpl',
        'clean:prod',
        'copy:prod'
    ]);
};
