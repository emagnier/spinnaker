'use strict';

describe('Controller: ContentlanguageCtrl', function () {

  // load the controller's module
  beforeEach(module('spinnakerApp'));

  var ContentlanguageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContentlanguageCtrl = $controller('ContentlanguageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
