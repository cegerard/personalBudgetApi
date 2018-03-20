'use strict'

module.exports = (app) => {
    const Role = app.models.Role;

    console.log('Initiate application roles.');
    
    //create the admin role
    Role.find({name: 'admin'})
        .then((role) => {
            console.log(`Keep existing ${role[0].name} role.`);
        })
        .catch(() => {
            Role.create({name: 'admin'})
            .then((role) => {
                console.log(`Role ${role.name} created`);
            })
            .catch((err) => {
                throw err;
            });
        });
};