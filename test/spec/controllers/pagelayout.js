'use strict';

describe('Controller: PagelayoutCtrl', function () {

  // load the controller's module
  beforeEach(module('spinnakerApp'));

  var PagelayoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagelayoutCtrl = $controller('PagelayoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
