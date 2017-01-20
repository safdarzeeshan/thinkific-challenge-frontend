'use strict';

describe('Service: integer', function () {

  // load the service's module
  beforeEach(module('thinkificChallengeFrontendApp'));

  // instantiate service
  var integer;
  beforeEach(inject(function (_integer_) {
    integer = _integer_;
  }));

  it('should do something', function () {
    expect(!!integer).toBe(true);
  });

});
