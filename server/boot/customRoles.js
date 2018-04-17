'use strict'

const { get } = require('lodash');

module.exports = (app) => {
    const Role = app.models.Role;
    const endUser = app.models.endUser;
    const RoleMapping = app.models.RoleMapping;

    console.log('Initiate application roles.');
    
    //create the admin role
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
            endUser.create({
                firstName: "administrator",
                lastName: "administrator",
                email: "admin@personalbudget.com",
                password: "adminadmin"
            })
            .then((admin) => {
                console.log('Default admin user created');
                adminRole.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: admin.id
                })
            })
            .catch((err) => {
               if(get(err, 'details.messages.email[0]', '') == 'Email already exists') {
                    console.log('Use existing admin user');
                } else {
                    throw err;
                }
            })
        });
};