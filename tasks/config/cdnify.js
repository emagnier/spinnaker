/**
 * Replace Google CDN references
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('cdnify', {
        dist: {
            html: ['<%= yeoman.dist %>/*.html']
        }
    });
};
