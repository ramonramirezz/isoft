'use strict';

describe('Controller: EditarempresaCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var EditarempresaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarempresaCtrl = $controller('EditarempresaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarempresaCtrl.awesomeThings.length).toBe(3);
  });
});
