/**
 * Route.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        path: {
            type: 'STRING',
            unique: true,
            required: true
        },

        statusCode: {
            type: 'INTEGER',
            required: true
        },

        itemLanguage: {
            model: 'itemLanguage'
        }
    }
};

