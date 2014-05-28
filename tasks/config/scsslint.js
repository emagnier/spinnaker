/**
 * Grunt Task for writing clean and consistent SCSS
 */
module.exports = function (grunt) {
    'use strict';

    grunt.config.set('scsslint', {
        options: {
            config: '.scss-lint.yml'
        },
        all: [
            'assets/styles/main.scss'
        ]
    });
};