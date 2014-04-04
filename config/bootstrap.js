/**
 * Bootstrap
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

var Q = require('q');

module.exports.bootstrap = function (cb) {

    var steps = [

        // DataTemplates
        function () {
            var deferred = Q.defer();

            var dataTemplates = [
                {
                    name: 'Home',
                    iconPath: ''
                },
                {
                    name: 'Services Hub',
                    iconPath: ''
                },
                {
                    name: 'Service',
                    iconPath: ''
                },
                {
                    name: 'Clients Hub',
                    iconPath: ''
                },
                {
                    name: 'Client',
                    iconPath: ''
                },
                {
                    name: 'Generic Page',
                    iconPath: ''
                },
                {
                    name: 'Folder',
                    iconPath: ''
                }
            ];

            DataTemplate.create(dataTemplates, function (err) {
                if (err) {
                    deferred.reject(new Error(err));
                }

                console.log('DataTemplates Created');
                deferred.resolve();
            });

            return deferred.promise;
        },

        // DataTemplate Sections
        function () {
            var deferred = Q.defer();

            DataTemplate.find().exec(function (err, dataTemplates) {
                if (err) throw err;

                dataTemplates.forEach(function (dataTemplate) {
                    dataTemplate.dataTemplateSections.add({
                        title: 'Meta'
                    });
                    dataTemplate.dataTemplateSections.add({
                        title: 'Main'
                    });
                    dataTemplate.save();
                });

                console.log('DataTemplates Sections Created');
                deferred.resolve();
            });

            return deferred.promise;
        },

        // DataTemplate Fields
        function () {
            var deferred = Q.defer();

            var title = {
                name: 'title',
                type: 'singleLineText'
            };
            var description = {
                name: 'description',
                type: 'multiLineText'
            };

            DataTemplateSection.find().exec(function (err, dataTemplateSections) {
                if (err) throw err;

                dataTemplateSections.forEach(function (dataTemplateSection) {
                    if (dataTemplateSection.title === 'Meta') {
                        dataTemplateSection.dataTemplateFields.add({
                            name: 'title',
                            type: 'singleLineText'
                        });
                        dataTemplateSection.dataTemplateFields.add({
                            name: 'description',
                            type: 'singleLineText'
                        });
                    }

                    if (dataTemplateSection.title === 'Main') {
                        dataTemplateSection.dataTemplateFields.add({
                            name: 'content',
                            type: 'richText'
                        });
                    }

                    dataTemplateSection.save();
                });

                console.log('DataTemplates Fields Created');
                deferred.resolve();
            });

            return deferred.promise;
        },

        // WebSite Language
        function () {
            var deferred = Q.defer();

            var languages = [
                {
                    code: 'fr',
                    title: 'Français',
                    priorityOrder: 0,
                    iconPath: ''
                },
                {
                    code: 'en',
                    title: 'English',
                    priorityOrder: 1,
                    iconPath: ''
                },
                {
                    code: 'es',
                    title: 'Español',
                    priorityOrder: 2,
                    iconPath: ''
                }
            ];

            WebSiteLanguage.create(languages, function (err) {
                if (err) {
                    deferred.reject(new Error(err));
                }

                console.log('WebSite Languages Created');
                deferred.resolve();
            });

            return deferred.promise;
        },

        // WebSite
        function () {
            var deferred = Q.defer();

            var webSite = {
                title: 'Node CMS WebSite',
                iconPath: ''
            };

            WebSite.create(webSite, function (err) {
                if (err) {
                    deferred.reject(new Error(err));
                }

                console.log('WebSite Created');
                deferred.resolve();
            });

            return deferred.promise;
        },

        // Load Sails.js
        function () {
            cb();
        }
    ];

    // Run functions sequentially
    steps.reduce(function (soFar, f) {
        return soFar.then(f);
    }, Q());
};