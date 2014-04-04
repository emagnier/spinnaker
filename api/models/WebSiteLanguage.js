/**
 * Language.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        code: {
            type: 'STRING',
            required: true,
            minLength: 2,
            maxLength: 2,
            unique: true
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

        webSite: {
            model: 'webSite'
        },

        itemLanguages: {
            collection: 'itemLanguage',
            via: 'language'
        }
    }
};
