'use strict';

const { ownership } = require('../../server/utils');

const OWNER_ID_PROP = 'ownerId';

module.exports = function(Expense) {
  //Hide main endpoints
  Expense.disableRemoteMethodByName('findOne');
  Expense.disableRemoteMethodByName('count');
  Expense.disableRemoteMethodByName('exists');
  Expense.disableRemoteMethodByName('upsert');
  Expense.disableRemoteMethodByName('updateAll');
  Expense.disableRemoteMethodByName('replaceOrCreate');
  Expense.disableRemoteMethodByName('createChangeStream');
  Expense.disableRemoteMethodByName('upsertWithWhere');
  Expense.disableRemoteMethodByName('prototype.updateAttributes');
  Expense.disableRemoteMethodByName('prototype.__get__budgetLine');
  Expense.disableRemoteMethodByName('prototype.__get__createdBy');
  Expense.sharedClass.findMethodByName('replaceById', true).http = [{ verb: 'put', path: '/:id' }];

  Expense.observe('before save', (ctx, next) => {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId; 

    // Add current user id as ownerId on each new instance creation
    if (ctx.isNewInstance) {
      ctx.instance.setAttribute(OWNER_ID_PROP, userId);
    }

    // Check for BudgetLine availability
    let budgetLineId;
    if (ctx.instance) {
      budgetLineId = ctx.instance.budgetLine;
    } else {
      budgetLineId = ctx.data.budgetLine;
    }

    ownership.isOwnBudgetLine(budgetLineId, userId)
      .then((isOwner) => {
        if(!isOwner) {
          next(new Error(`budget line ${budgetLineId} does not belong to user ${userId} !`));
        } else {
          next();
        }
      });
  });
};
