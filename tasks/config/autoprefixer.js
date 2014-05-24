/**
 * Add vendor prefixed styles in the final CSSS
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('autoprefixer', {
        options: {
            browsers: ['last 2 version']
        },
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '.tmp/public/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/public/styles/'
                }
            ]
        }
    });
};
