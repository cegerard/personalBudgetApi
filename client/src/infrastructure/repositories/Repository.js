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

  /**
   * Get a resource using an identifier
   * @param {string} id the resource identifier
   * @param {object} context context object for repository implementation
   */
  getById(id, context) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  /**
   * Get the resources list
   * @param {number} page the page to get
   * @param {number} size the number of resource in each page
   * @param {object} context context object for repository implementation
   */
  getAll(page, size, context) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  /**
   * Create a new resource if it does not exits, update the existing resource otherwise
   * @param {object} resource the resource to create or update
   * @param {object} context  context object for repository implementation
   */
  upsert(resource, context) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  /**
   * Update a resource
   * @param {object} resource the resource to update
   * @param {object} context  context object for repository implementation
   */
  update(resource, context) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  /**
   * Create a new resource
   * @param {obecjt} newResource the resource to create
   * @param {object} context  context object for repository implementation
   */
  create(newResource, context) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }
  /**
   * Delete an existing resource
   * @param {string} id the identifier of the resource to delete
   * @param {object} context context object for repository implementation
   */
  delete(id, context) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }

  /**
   * Search for resources base on filters
   * @param {object} filter the filter to apply on resources
   * @param {object} context  context object for repository implementation
   */
  search(filter, context) { // eslint-disable-line no-unused-vars
    throw 'Not implemented, this is an abstract class';
  }
};
