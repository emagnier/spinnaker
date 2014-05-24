/**
 * ItemVersion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        createdAt: {
            type: 'DATETIME',
            datetime: true,
            required: true
        },

        itemLanguage: {
            model: 'itemLanguage'
        },

        itemValues: {
            collection: 'itemValue',
            via: 'itemVersion'
        }
    }
};
