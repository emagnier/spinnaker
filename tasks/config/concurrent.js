/**
 * Run some tasks in parallel to speed up the build process
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('concurrent', {
        dev: [
            'sass:dev',
            'jst:compile',
            'sync:dev'
        ],
        test: [
            'sass:dev',
            'jst:compile',
            'sync:dev'
        ],
        prod: [
            'sass:prod',
            'imagemin',
            'svgmin',
            'jst:compile',
            'sync:dev'
        ]
    });
};
