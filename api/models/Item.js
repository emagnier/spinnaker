/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'STRING',
            required: true,
            notEmpty: true
        },

        order: {
            type: 'INTEGER',
            defaultsTo: 0,
            integer: true
        },

        hierarchy: {
            type: 'ARRAY',
            required: true,
            array: true
        },

        itemLanguages: {
            collection: 'itemLanguage',
            via: 'item'
        },

        dataTemplate: {
            model: 'dataTemplate'
        },

        pageLayout: {
            model: 'pageLayout'
        }
    }
};
