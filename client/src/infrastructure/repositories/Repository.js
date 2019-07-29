'use strict';

/**
 * Abstract class use to generalize
 * resource repository mecanism
 */
module.exports = class Repository {
    constructor(name) {
        this.name = name;
    }

    getById(id) {
        throw 'Not implemented, this is an abstract class';
    }

    getAll() {
        throw 'Not implemented, this is an abstract class';
    }

    update(resource) {
        throw 'Not implemented, this is an abstract class';
    }

    create(newResource) {
        throw 'Not implemented, this is an abstract class';
    }

    delete(id) {
        throw 'Not implemented, this is an abstract class';
    }

    search(filter) {
        throw 'Not implemented, this is an abstract class';
    }
}