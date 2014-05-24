module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('default', [
        'compileDevAssets',
        'watch'
    ]);
};
