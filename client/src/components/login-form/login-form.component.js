'use strict';

const jsCookie = require('js-cookie');

const authenticationService = require('../../infrastructure/authenticationService');
const navigationService = require('../../infrastructure/ui/navigationService');

module.exports = class {
    onCreate() {
        this.state = {
            form: {
                email: '',
                password: ''
            }
        };
    }

    setEmail(event) {
        this.state.form.email = event.target.value;
    }

    setPsw(event) {
        this.state.form.password = event.target.value;
    }

    login() {
        authenticationService
            .login(this.state.form. email, this.state.form.password)
            .then(session => {
                // Save session client side
                jsCookie.set('userId', session.userId);
                jsCookie.set('token', session.id); // TODO set ttl for cookie here
                navigationService.replace('/budgets');
            });
    }
}