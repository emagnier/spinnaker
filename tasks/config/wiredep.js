/**
 * Automatically inject Bower components into the app
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('wiredep', {
        app: {
            src: ['<%= yeoman.views %>/layout.ejs'],
            ignorePath: '../assets'
        },
        sass: {
            src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
            ignorePath: '<%= yeoman.app %>/bower_components/'
        }
    });
};
