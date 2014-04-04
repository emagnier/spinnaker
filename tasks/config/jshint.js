/**
 * Validate files with JSHint.
 */
module.exports = function (grunt) {
    'use strict';

    grunt.config.set('jshint', {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        files: [
            'Gruntfile.js',
            'tasks/**/*.js',
            'api/{,*/}*.js',
            'assets/**/*.js',
            '!assets/bower_components/**',
            '!assets/**/*.io.js'
        ]
    });
};
