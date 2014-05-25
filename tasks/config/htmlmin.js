module.exports = function(grunt) {
    'use strict';

    grunt.config.set('htmlmin', {
        dist: {
            options: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true,
                removeOptionalTags: true
            },
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>',
                src: ['*.html', 'views/{,*/}*.html'],
                dest: '<%= yeoman.dist %>'
            }]
        }
    });
};
