/*global cms, Backbone, JST*/

cms.Views = cms.Views || {};

(function () {
    'use strict';

    cms.Views.ApplicationView = Backbone.View.extend({

        template: JST['app/scripts/templates/application.ejs']

    });

})();
