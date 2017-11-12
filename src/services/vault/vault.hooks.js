const { authenticate,  } = require('feathers-authentication').hooks;
const { disallow, setCreatedAt } = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt'), restrictToOwner({idField: '_id', 'ownerField': 'creatorId'}) ],
    find: [],
    get: [],
    create: [
      setCreatedAt()
    ],
    update: [disallow('external')],
    patch: [disallow('external')],
    remove: [disallow('external')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
