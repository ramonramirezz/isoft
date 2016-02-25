'use strict';

describe('Service: service.firebase', function () {

  // load the service's module
  beforeEach(module('projectApp'));

  // instantiate service
  var service.firebase;
  beforeEach(inject(function (_service.firebase_) {
    service.firebase = _service.firebase_;
  }));

  it('should do something', function () {
    expect(!!service.firebase).toBe(true);
  });

});
