/**
 * WebSite.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

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

        webSiteLanguages: {
            collection: 'webSiteLanguage',
            via: 'webSite'
        }
    }
};
