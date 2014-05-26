'use strict';

angular.module('spinnakerApp')
    .controller('LanguageCtrl', function($scope, $resource) {

        var url = '/language',
            Language = $resource(url, {id: '@id'}, {
                    update: {
                        method: 'PUT',
                        url: url + '/update/:id'
                    }
                }
            );

        // Global data
        $scope.language = new Language();
        $scope.languageList = Language.query();
        $scope.languageErrors = null;
        $scope.languageTitleToDelete = '';

        // Presentation
        $scope.currentLanguageTitle = '';
        $scope.editMode = false;

        $scope.editLanguage = function(language) {
            $scope.currentLanguageTitle = language.title;
            $scope.editMode = true;
            $scope.language = _.clone(language);
            $scope.languageErrors = null;
        };

        $scope.newLanguage = function() {
            $scope.editMode = false;
            $scope.language = new Language();
            $scope.languageErrors = null;
        };

        $scope.saveLanguage = function() {
            var method = $scope.language.id ? '$update' : '$save';
            $scope.language[method]({}, function() {
                    $('#language_editModal').modal('hide');
                    $scope.language = new Language();
                    $scope.languageList = Language.query();
                    $scope.editMode = false;
                }, function(data) {
                    if (data && data.data && data.data.validationErrors && data.data.validationErrors.invalidAttributes) {
                        $scope.languageErrors = data.data.validationErrors.invalidAttributes;
                    }
                }
            );
        };

        $scope.confirmDeleteLanguage = function(language) {
            $scope.currentLanguageTitle = language.title;
            $scope.languageTitleToDelete = '';
            $scope.language = language;
        };

        $scope.deleteLanguage = function(language) {
            language.$delete({}, function() {
                $('#language_deleteModal').modal('hide');
                $scope.languageTitleToDelete = '';
                $scope.languageList.splice($scope.languageList.indexOf(language), 1);
            });
        };
    });
