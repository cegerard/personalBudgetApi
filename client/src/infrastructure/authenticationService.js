'use strict';

const axios = require('axios');
const config = require('../../config').httpRepository;

class AuthenticationService {
    login(login, password) {
        return axios({
            method: 'post',
            url: `${config.baseUrl}/endUsers/login`,
            data: {
                email: login,
                password
            }
        }).then(response => {
            return response.data;
        });
    }
}

module.exports = new AuthenticationService();