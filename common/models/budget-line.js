'use strict';

module.exports = function(Budgetline) {
  //Hide main endpoints
  Budgetline.disableRemoteMethodByName('findOne');
  Budgetline.disableRemoteMethodByName('count');
  Budgetline.disableRemoteMethodByName('exists');
  Budgetline.disableRemoteMethodByName('upsert');
  Budgetline.disableRemoteMethodByName('updateAll');
  Budgetline.disableRemoteMethodByName('replaceOrCreate');
  Budgetline.disableRemoteMethodByName('createChangeStream');
  Budgetline.disableRemoteMethodByName('upsertWithWhere');
  Budgetline.disableRemoteMethodByName('prototype.updateAttributes');
  Budgetline.disableRemoteMethodByName('prototype.__get__createdBy');
  Budgetline.sharedClass.findMethodByName('replaceById', true).http = [{ verb: 'put', path: '/:id' }];

  // Hide expense relation endpoints
  Budgetline.disableRemoteMethodByName('prototype.__delete__expenses');
  Budgetline.disableRemoteMethodByName('prototype.__count__expenses');
  Budgetline.disableRemoteMethodByName('prototype.__destroyById__expenses');
  Budgetline.disableRemoteMethodByName('prototype.__updateById__expenses');
  Budgetline.disableRemoteMethodByName('prototype.__findById__expenses');
};
