module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('compileProdAssets', [
        'clean',
        'copy:dev',
        'wiredep',
        'concurrent:prod',
        'autoprefixer',
        'ngmin',
        'copy:prod',
        'sails-linker:prodJs',
        'sails-linker:prodStyles',
        'sails-linker:devTpl',
        //'cdnify',
        //'uglify',
        //'rev',
        //'usemin',
        //'htmlmin'
    ]);
};
