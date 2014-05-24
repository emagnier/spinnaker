'use strict';

angular.module('nodeCmsApp')
    .controller('ItemCtrl', function ($scope, $resource) {

        var Item = $resource('http://localhost:1337/item', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

        $scope.item = new Item();
        $scope.itemList = Item.query();

        $scope.saveItem = function () {

            var method = $scope.item.id ? '$update' : '$save';

            $scope.item[method]({}, function () {

                $scope.item = new Item();
                $scope.itemList = Item.query();

                console.log('Saved!!');
            });
        };

        $scope.editItem = function (item) {
            $scope.item = item;
        };

    });
