// Initializes the `vault` service on path `/vault`
const createService = require('../../feathers-mongodb');
const hooks = require('./vault.hooks');
const filters = require('./vault.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/vault', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('vault');

  mongoClient.then(db => {
    service.Model = db.collection('vault');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
