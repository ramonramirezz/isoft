'use strict';

describe('Service: empresa.srv', function () {

  // load the service's module
  beforeEach(module('projectApp'));

  // instantiate service
  var empresa.srv;
  beforeEach(inject(function (_empresa.srv_) {
    empresa.srv = _empresa.srv_;
  }));

  it('should do something', function () {
    expect(!!empresa.srv).toBe(true);
  });

});
