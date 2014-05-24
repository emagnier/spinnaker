module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('compileProdAssets', [
        'clean',
        //'wiredep',
        'concurrent:prod',
        'autoprefixer',
        'copy:dev',
        'copy:prod',
        //'concat',
        //'uglify',
        //'cssmin',
        'sails-linker:prodJs',
        'sails-linker:prodStyles',
        'sails-linker:devTpl'
    ]);
};
