/**
 * Precompiles Underscore templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * (i.e. basically it takes HTML files and turns them into tiny little
 *  javascript functions that you pass data to and return HTML. This can
 *  speed up template rendering on the client, and reduce bandwidth usage.)
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-jst
 *
 */

/* jshint unused: false */

module.exports = function (grunt) {
    'use strict';

    grunt.config.set('jst', {
        compile: {
            files: {
                '.tmp/public/scripts/templates.js': ['assets/templates/**/*.ejs'] //require('../pipeline').templateFilesToInject
            }
        }
    });
};