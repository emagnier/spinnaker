/**
 * DataTemplateCategory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'STRING'
    },

    iconPath: {
      type: 'STRING',
      defaultsTo: ''
    },

    dataTemplateFields: {
      collection: 'dataTemplateField',
      via: 'dataTemplateSection'
    },

    dataTemplate: {
      model: 'dataTemplate',
      required: true
    }
  }
};
