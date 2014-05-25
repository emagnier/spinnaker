module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('test', [
        'compileDevAssets',
        // Todo: launch here an instance of Sails.js
        'karma'
    ]);
};
