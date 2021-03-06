'use strict';

module.exports = function(EndUser) {
  // Hide main endpoints
  EndUser.disableRemoteMethodByName('findOne');
  EndUser.disableRemoteMethodByName('count');
  EndUser.disableRemoteMethodByName('exists');
  EndUser.disableRemoteMethodByName('upsert');
  EndUser.disableRemoteMethodByName('updateAll');
  EndUser.disableRemoteMethodByName('replaceOrCreate');
  EndUser.disableRemoteMethodByName('createChangeStream');
  EndUser.disableRemoteMethodByName('upsertWithWhere');
  EndUser.disableRemoteMethodByName('prototype.verify');
  EndUser.disableRemoteMethodByName('prototype.updateAttributes');
  EndUser.sharedClass.findMethodByName('replaceById', true).http =
    [{verb: 'put', path: '/:id'}];

  // Hide token relation endpoints
  EndUser.disableRemoteMethodByName('prototype.__create__accessTokens');
  EndUser.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  EndUser.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  EndUser.disableRemoteMethodByName('prototype.__findById__accessTokens');
  EndUser.disableRemoteMethodByName('prototype.__count__accessTokens');

  // Hide budget lines relation endpoints
  EndUser.disableRemoteMethodByName('prototype.__delete__budgetLines');
  EndUser.disableRemoteMethodByName('prototype.__count__budgetLines');

  // Hide expense relation endpoints
  EndUser.disableRemoteMethodByName('prototype.__create__expenses');
  EndUser.disableRemoteMethodByName('prototype.__delete__expenses');
  EndUser.disableRemoteMethodByName('prototype.__count__expenses');
  EndUser.disableRemoteMethodByName('prototype.__updateById__budgetLines__expenses');
};
