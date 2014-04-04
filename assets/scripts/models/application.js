/*global cms, Backbone*/

cms.Models = cms.Models || {};

(function () {
    'use strict';

    cms.Models.ApplicationModel = Backbone.Model.extend({

        url: '',

        initialize: function () {
        },

        defaults: {
        },

        validate: function (attrs, options) {
        },

        parse: function (response, options) {
            return response;
        }
    });

})();
