/**
 * ItemLanguage.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        item: {
            model: 'item',
            required: true
        },

        route: {
            collection: 'route',
            via: 'itemLanguage'
        },

        language: {
            model: 'language'
        },

        itemVersions: {
            collection: 'itemVersion',
            via: 'itemLanguage'
        }
    }
};
