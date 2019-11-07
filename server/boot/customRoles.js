'use strict';

const {get} = require('lodash');

module.exports = (app) => {
  const Role = app.models.Role;
  const endUser = app.models.endUser;
  const RoleMapping = app.models.RoleMapping;

  console.log('Initiate application roles.');

  // create the admin role
  Role.find({name: 'admin'})
    .then((adminRole) => {
      console.log(`Keep existing ${adminRole[0].name} role.`);
      return adminRole[0];
    })
    .catch(() => {
      return Role.create({name: 'admin'})
        .then((newAdminRole) => {
          console.log(`Role ${newAdminRole.name} created`);
          return newAdminRole;
        })
        .catch((err) => {
          throw err;
        });
    })
    .then((adminRole) => {
      return endUser.create({
        firstName: 'administrator',
        lastName: 'administrator',
        email: 'admin@personalbudget.com',
        password: 'adminadmin',
      })
        .then((admin) => {
          console.log('Default admin user created');
          return adminRole.principals.create({
            principalType: RoleMapping.USER,
            principalId: admin.id,
          })
            .then((principal) => {
              console.log('Administrator added to admin role');
              return principal;
            })
            .catch((err) => {
              console.err('Fail to associate admin user to admin role');
              console.log(err);
              throw err;
            });
        })
        .catch((err) => {
          const errorMessage = get(err, 'details.messages.email[0]', '');
          if (errorMessage === 'Email already exists') {
            console.log('Use existing admin user');
          } else {
            throw err;
          }
        });
    });
};
