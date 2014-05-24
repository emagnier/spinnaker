/**
 * Test settings
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('karma', {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    });
};
