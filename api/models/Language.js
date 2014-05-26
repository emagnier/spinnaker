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

        iconPath: {
            type: 'STRING',
            defaultsTo: ''
        },

        itemLanguages: {
            collection: 'itemLanguage',
            via: 'language'
        },

        websites: {
            collection: 'website',
            via: 'languages',
            dominant:true
        }
    },

    afterValidate: function (record, next) {
        'use strict';

        record.code = record.code.toLowerCase();
        next();
    },

    beforeCreate: function (record, next) {
        'use strict';

        // TODO: The unique rule seems to be not checked by the ORM.
        Language.findOne({code: record.code}).exec(function (err, found) {
            if (err) return next(err);
            if (found) return next(new Error('Code must be unique.'));

            record.id = generateUUID.v4();
            return next();
        });
    }
};
