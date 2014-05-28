module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('compileDevAssets', [
        'newer:jshint',
        'newer:scsslint:all',
        'clean:dev',
        'copy:dev',
        'wiredep',
        'concurrent:dev',
        'autoprefixer'
    ]);
};
