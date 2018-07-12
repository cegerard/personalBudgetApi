'use strict';

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

    if (ctx.instance) {
      ctx.instance.setAttribute('ownerId', userId);
    } else {
      ctx.data.ownerId = userId;
    }

    next();
  });
};
