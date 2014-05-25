/**
 * Renames files for browser caching purposes
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('rev', {
        dist: {
            files: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        }
    });
};
