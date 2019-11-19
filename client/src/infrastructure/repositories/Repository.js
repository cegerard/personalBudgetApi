'use strict';

const respositoryConfig = require('../../../config').httpRepository;

/**
 * Abstract class use to generalize
 * resource repository mecanism
 */
module.exports = class Repository {
  constructor(name) {
    this.name = name;
    this.config = respositoryConfig;
  }

  getById(id) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  getAll() { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  update(resource) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  create(newResource) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  delete(id) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  search(filter) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }
};
