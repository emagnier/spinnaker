module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('compileDevAssets', [
        'clean:dev',
        //'wiredep',
        'concurrent:dev',
        'autoprefixer',
        'copy:dev'
    ]);
};
