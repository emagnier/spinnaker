'use strict';

describe('Controller: DataTemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('spinnakerApp'));

  var DatatemplateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatatemplateCtrl = $controller('DatatemplateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
