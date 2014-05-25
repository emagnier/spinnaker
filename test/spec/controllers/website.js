'use strict';

describe('Controller: WebsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('spinnakerApp'));

  var WebsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebsiteCtrl = $controller('WebsiteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
