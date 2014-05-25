/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on files in the `assets` folder,
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('watch', {
        api: {
            files: ['api/**/*']
        },
        assets: {
            files: [
                '<%= yeoman.app %>/**/*',
                '!<%= yeoman.app %>/**/*.{scss,sass,js,ejs}',
                '!<%= yeoman.app %>/bower_components/**'
            ],
            tasks: ['sync:dev']
        },
        bower: {
            files: ['bower.json'],
            tasks: ['wiredep', 'sync:dev']
        },
        js: {
            files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
            tasks: ['newer:jshint:all', 'sync:dev'],
            options: {
                livereload: true
            }
        },
        jsTest: {
            files: ['test/spec/{,*/}*.js'],
            tasks: ['newer:jshint:test', 'karma']
        },
        sass: {
            files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
            tasks: ['sass:dev', 'autoprefixer']
        },
        gruntfile: {
            files: [
                'Gruntfile.js',
                'tasks/*.js'
            ]
        },
        jst: {
            files: ['<%= yeoman.app %>/templates/{,*/}*.ejs'],
            tasks: ['jst:compile']
        },
        livereload: {
            files: [
                '<%= yeoman.views %>/{,*/}*.ejs',
                '.tmp/styles/{,*/}*.css',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });
};
