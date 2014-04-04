/**
 * PageLayout.js
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

        iconPath: {
            type: 'STRING',
            defaultsTo: ''
        },

        layoutPath: {
            type: 'STRING',
            defaultsTo: ''
        },

        items: {
            collection: 'item',
            via: 'pageLayout'
        },

        dataTemplates: {
            collection: 'dataTemplate',
            via: 'pageLayout'
        }
    }
};
