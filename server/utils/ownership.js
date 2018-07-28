'use strict';

const app = require('../server');

module.exports = {
    isOwnBudgetLine: (budgetLineId, userId) => {
        const Budgetline = app.models.budgetLine;
        return Budgetline.findOne({where: {id: budgetLineId, ownerId: userId}})
            .then((budgetline) => {
                return budgetline;
            });
    }
}
