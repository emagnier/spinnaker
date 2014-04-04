/*global cms, Backbone*/

cms.Collections = cms.Collections || {};

(function () {
    'use strict';

    cms.Collections.ApplicationCollection = Backbone.Collection.extend({

        model: cms.Models.ApplicationModel

    });

})();
