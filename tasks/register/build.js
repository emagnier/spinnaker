module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', [
        'compileDevAssets',
        'sails-linker:devJsRelative',
        'sails-linker:devStylesRelative',
        'sails-linker:devTpl',
        'clean:prod',
        'copy:prod'
    ]);
};
