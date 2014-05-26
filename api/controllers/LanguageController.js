/**
 * LanguageController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    definition: function(req, res) {
        'use strict';

        return res.json(Language.definition);
    }
};
