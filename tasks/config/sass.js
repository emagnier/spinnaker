/**
 * Compiles SASS files into CSS.
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('sass', {
        options: {
            loadPath: 'assets/bower_components',
            debugInfo: false,
            sourcemap: true
        },
        dev: {
            options: {
                style: 'expanded'
            },
            files: [
                {
                    expand: true,
                    cwd: 'assets/styles',
                    dest: '.tmp/public/styles/',
                    src: ['main.scss'],
                    ext: '.css'
                }
            ]
        },
        prod: {
            options: {
                style: 'compressed'
            },
            files: [
                {
                    expand: true,
                    cwd: 'assets/styles',
                    dest: '.tmp/public/styles/',
                    src: ['main.scss'],
                    ext: '.css'
                }
            ]
        }
    });
};