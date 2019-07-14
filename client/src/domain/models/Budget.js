'use strict';

/**
 * Budget model for the client application
 */
module.exports = class Budget {
    constructor(id, name, budget, description) {
        this.id = id;
        this.name = name;
        this.budget = budget;
        this.description = description;
    }
}