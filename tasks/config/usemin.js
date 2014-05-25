module.exports = function(grunt) {
    'use strict';

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    grunt.config.set('useminPrepare', {
        html: '<%= yeoman.view %>/index.ejs',
        options: {
            dest: '<%= yeoman.dist %>',
            flow: {
                html: {
                    steps: {
                        js: ['concat', 'uglifyjs'],
                        css: ['cssmin']
                    },
                    post: {}
                }
            }
        }
    });

    // Performs rewrites based on rev and the useminPrepare configuration
    grunt.config.set('usemin', {
        html: ['<%= yeoman.view %>/{,*/}*.ejs'],
        css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
        options: {
            assetsDirs: ['<%= yeoman.dist %>']
        }
    });
};
