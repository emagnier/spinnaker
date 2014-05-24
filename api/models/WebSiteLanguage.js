/**
 * Language.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var generateUUID = require('node-uuid');

module.exports = {

    attributes: {

        code: {
            type: 'STRING',
            required: true,
            minLength: 2,
            maxLength: 2,
            unique: true,
            index: true
        },

        title: {
            type: 'STRING',
            required: true,
            notEmpty: true
        },

        priorityOrder: {
            type: 'INTEGER',
            required: true
        },

        iconPath: {
            type: 'STRING',
            defaultsTo: ''
        },

        itemLanguages: {
            collection: 'itemLanguage',
            via: 'language'
        }
    },

    beforeValidate: function (record, next) {
        'use strict';

        if (typeof record.priorityOrder !== 'undefined') {
            return next();
        }

        // Determine the priority order of a new language.
        WebSiteLanguage.find(function (err, languages) {
            if (err) return next(err);

            record.priorityOrder = 0;
            if (languages.length > 0) {
                record.priorityOrder = parseInt(_.max(_.pluck(languages, 'priorityOrder')), 10) + 1;
            }

            return next();
        });
    },

    beforeCreate: function (record, next) {
        'use strict';

        // TODO: The unique rule seems to be not checked by the ORM.
        WebSiteLanguage.findOne({code: record.code}).exec(function (err, found) {
            if (err) return next(err);
            if (found) return next(new Error('Code must be unique.'));

            record.id = generateUUID.v4();
            return next();
        });
    }
};
