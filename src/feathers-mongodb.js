const createService = require('feathers-mongodb')
const { ObjectID } = require('mongodb')

// https://docs.feathersjs.com/api/databases/common.html#extending-adapters

class Service extends createService.Service {
  _objectifyId(id) {
    return id
  }
  create(data, params) {
    if (Array.isArray(data)) {
      for (const i in data) {
        data[i]._id = ObjectID().toString()
      }
    } else {
      data._id = ObjectID().toString()
    }
    return super.create(data, params)
  }
}

module.exports = function init(options) {
  return new Service(options);
}
module.exports.Service = Service

