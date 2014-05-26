'use strict';

angular
    .module('spinnakerApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngSails'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/language', {
                templateUrl: 'views/language.html',
                controller: 'LanguageCtrl'
            })
            .when('/datatemplate', {
                templateUrl: 'views/dataTemplate.html',
                controller: 'DataTemplateCtrl'
            })
            .when('/item', {
                templateUrl: 'views/item.html',
                controller: 'ItemCtrl'
            })
            .when('/pagelayout', {
                templateUrl: 'views/pageLayout.html',
                controller: 'PageLayoutCtrl'
            })
            .when('/route', {
                templateUrl: 'views/route.html',
                controller: 'RouteCtrl'
            })
            .when('/website', {
                templateUrl: 'views/website.html',
                controller: 'WebsiteCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
