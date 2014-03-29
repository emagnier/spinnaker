/**
 * Models
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 */

var uuid = require('node-uuid');

module.exports.models = {

  connection: 'localDiskDb',

  schema: true,

  attributes: {

    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      uuidv4: true
    }
  },

  beforeCreate: function(record, next) {
    'use strict';

    record.id = uuid.v4();
    next();
  },

  beforeUpdate: function(record, next) {
    'use strict';

    delete record.id;
    next();
  }
};
