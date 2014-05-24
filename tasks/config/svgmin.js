module.exports = function(grunt) {
    'use strict';

    grunt.config.set('svgmin', {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }
            ]
        }
    });
};
