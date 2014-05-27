'use strict';

angular.module('spinnakerApp')
    .controller('PageLayoutCtrl', function($scope, $resource) {

        var url = '/pagelayout',
            PageLayout = $resource(url, {id: '@id'}, {
                    update: {
                        method: 'PUT',
                        url: url + '/update/:id'
                    }
                }
            );

        // Global data
        $scope.pageLayout = new PageLayout();
        $scope.pageLayoutList = PageLayout.query();
        $scope.pageLayoutErrors = null;
        $scope.pageLayoutTitleToDelete = '';

        // Presentation
        $scope.currentPageLayoutTitle = '';
        $scope.editMode = false;

        $scope.editPageLayout = function(pageLayout) {
            $scope.currentPageLayoutTitle = pageLayout.title;
            $scope.editMode = true;
            $scope.pageLayout = _.clone(pageLayout);
            $scope.pageLayoutErrors = null;
        };

        $scope.newPageLayout = function() {
            $scope.editMode = false;
            $scope.pageLayout = new PageLayout();
            $scope.pageLayoutErrors = null;
        };

        $scope.savePageLayout = function() {
            var method = $scope.pageLayout.id ? '$update' : '$save';
            $scope.pageLayout[method]({}, function() {
                    $('#pageLayout_editModal').modal('hide');
                    $scope.pageLayout = new PageLayout();
                    $scope.pageLayoutList = PageLayout.query();
                    $scope.editMode = false;
                }, function(data) {
                    if (data && data.data && data.data.validationErrors && data.data.validationErrors.invalidAttributes) {
                        $scope.pageLayoutErrors = data.data.validationErrors.invalidAttributes;
                    }
                }
            );
        };

        $scope.confirmDeletePageLayout = function(pageLayout) {
            $scope.currentPageLayoutTitle = pageLayout.title;
            $scope.pageLayoutTitleToDelete = '';
            $scope.pageLayout = pageLayout;
        };

        $scope.deletePageLayout = function(pageLayout) {
            pageLayout.$delete({}, function() {
                $('#pageLayout_deleteModal').modal('hide');
                $scope.pageLayoutTitleToDelete = '';
                $scope.pageLayoutList.splice($scope.pageLayoutList.indexOf(pageLayout), 1);
            });
        };
    });
