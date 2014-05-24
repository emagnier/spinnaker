/**
 * Project settings
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('yeoman', {
        // configurable paths
        app: require('../../bower.json').appPath || 'app',
        views: 'views',
        dist: 'www'
    });
};
