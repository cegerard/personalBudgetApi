'use strict';

const OWNER_ID_PROP = 'ownerId';

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

  // Add Remote methods  
  Budgetline.remoteMethod(
    'total',
    {
      description: 'Compute the total expense in this budget line',
      http: {
        path: '/:id/total',
        verb: 'get'
      },
      accepts: [{arg: 'id', type: 'string', required: true}],
      returns: {
        type: 'number',
        root: true
      }
    }
  )

  // Add operation Hooks
  Budgetline.observe('before save', (ctx, next) => {  
    // Add current user id as ownerId on each new instance creation
    if (ctx.isNewInstance) {
      const token = ctx.options && ctx.options.accessToken;
      const userId = token && token.userId;
  
      ctx.instance.setAttribute(OWNER_ID_PROP, userId);
    }

    next();
  });
};
