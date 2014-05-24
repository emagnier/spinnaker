module.exports = function(grunt) {
    'use strict';

    grunt.config.set('imagemin', {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }
            ]
        }
    });
};
