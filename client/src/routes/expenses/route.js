const getUserSession = require('../../infrastructure/HttpRequest/getUserSession');
const expenseRepository = require('../../infrastructure/repositories/expense');

const template = require('./index.marko');

exports.handler = async (input, out) => {
    const context = getUserSession(input.headers);
    const expenses = await expenseRepository.getAll(0, 20, context);
    template.render({ expenses }, out);
};