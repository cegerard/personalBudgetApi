'use strict';

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
}