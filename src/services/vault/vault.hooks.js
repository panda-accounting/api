const { authenticate,  } = require('feathers-authentication').hooks;
const { disallow, setCreatedAt } = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');

function isFalse(obj) {
  return obj == false || JSON.stringify(obj) == '{}'
}

module.exports = {
  before: {
    all: [ authenticate('jwt'), restrictToOwner({idField: '_id', 'ownerField': 'creatorId'}) ],
    find: [
      (ctx) => {
        if (isFalse(ctx.params.query)) {
          ctx.params.query = { $sort: {createdAt: -1}, 'creatorId': ctx.params.user._id };
        }
      }
    ],
    get: [disallow('external')],
    create: [
      setCreatedAt(),
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
