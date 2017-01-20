'use strict';

describe('Controller: IntegerCtrl', function () {

  // load the controller's module
  beforeEach(module('thinkificChallengeFrontendApp'));

  var IntegerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntegerCtrl = $controller('IntegerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
