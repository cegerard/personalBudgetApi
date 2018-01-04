'use strict';

module.exports = function(EndUser) {
  //Hide main endpoints
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
  EndUser.sharedClass.findMethodByName('replaceById', true).http = [{ verb: 'put', path: '/:id' }];

  // Hide expense relation endpoints
  EndUser.disableRemoteMethodByName('prototype.__create__accessTokens');
  EndUser.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  EndUser.disableRemoteMethodByName('prototype.__updateById__accessTokens'); 
  EndUser.disableRemoteMethodByName('prototype.__findById__accessTokens');
  EndUser.disableRemoteMethodByName('prototype.__count__accessTokens');
};