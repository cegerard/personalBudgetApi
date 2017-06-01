'use strict';

module.exports = function(Budgetline) {
  //Hide endpoints
  Budgetline.disableRemoteMethodByName('findOne');
  Budgetline.disableRemoteMethodByName('count');
  Budgetline.disableRemoteMethodByName('exists');
  Budgetline.disableRemoteMethodByName('upsert');
  Budgetline.disableRemoteMethodByName('updateAll');
  Budgetline.disableRemoteMethodByName('replaceOrCreate');
  Budgetline.disableRemoteMethodByName('createChangeStream');
  Budgetline.disableRemoteMethodByName('upsertWithWhere');
  Budgetline.disableRemoteMethodByName('prototype.updateAttributes');

  Budgetline.sharedClass.findMethodByName('replaceById', true).http = [{ verb: 'put', path: '/:id' }];
};
