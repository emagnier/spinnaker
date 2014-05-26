/**
 * Website.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var generateUUID = require('node-uuid');

module.exports = {

    attributes: {

        title: {
            type: 'STRING',
            required: true,
            notEmpty: true
        },

        iconPath: {
            type: 'STRING',
            defaultsTo: ''
        },

        homeItem: {
            type: 'STRING',
            defaultsTo: '',
            uuidv4: true
        },

        rootDataTemplates: {
            collection: 'dataTemplate',
            via: 'rootItem'
        },

        languages: {
            collection: 'language',
            via: 'websites',
            dominant:true
        }
    },

    beforeCreate: function (record, next) {
        'use strict';

        // TODO: Better error response in JSON.
        WebSite.find().limit(1).exec(function (err, site) {
            if (err) return next(err);
            if (site.length) return next(new Error('You can create only 1 site.'));

            record.id = generateUUID.v4();
            return next();
        });
    }
};
