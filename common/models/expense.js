'use strict';

module.exports = function(Expense) {
  Expense.disableRemoteMethodByName('findOne');
  Expense.disableRemoteMethodByName('count');
  Expense.disableRemoteMethodByName('exists');
  Expense.disableRemoteMethodByName('upsert');
  Expense.disableRemoteMethodByName('updateAll');
  Expense.disableRemoteMethodByName('replaceOrCreate');
  Expense.disableRemoteMethodByName('createChangeStream');
  Expense.disableRemoteMethodByName('upsertWithWhere');
  Expense.disableRemoteMethodByName('prototype.updateAttributes');
  Expense.disableRemoteMethodByName('deleteById');

  Expense.sharedClass.findMethodByName('replaceById', true).http = [{ verb: 'put', path: '/:id' }];

};
