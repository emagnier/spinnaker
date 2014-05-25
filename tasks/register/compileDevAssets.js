module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('compileDevAssets', [
        'newer:jshint',
        'clean:dev',
        'copy:dev',
        //'wiredep',
        'concurrent:dev',
        'autoprefixer'
    ]);
};
