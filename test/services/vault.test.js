const assert = require('assert');
const app = require('../../src/app');

describe('\'vault\' service', () => {
  it('registered the service', () => {
    const service = app.service('vault');

    assert.ok(service, 'Registered the service');
  });
});
