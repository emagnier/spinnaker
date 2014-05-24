/**
 * Models
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 */

var generateUUID = require('node-uuid');

module.exports.models = {

    connection: 'mongodbServer',

    schema: true,

    autoPK: false,

    attributes: {

        id: {
            type: 'STRING',
            primaryKey: true,
            unique: true,
            uuidv4: true
        }
    },

    beforeCreate: function (record, next) {
        'use strict';

        record.id = generateUUID.v4();
        next();
    },

    beforeUpdate: function (record, next) {
        'use strict';

        delete record.id;
        next();
    }
};
