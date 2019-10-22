const getUserSession = require('../../infrastructure/HttpRequest/getUserSession');
const expenseRepository = require('../../infrastructure/repositories/expense');

const template = require('./index.marko');

exports.paths = '/expenses/:id';

exports.handler = async (input, out) => {
    const context = getUserSession(input.headers);
    const expense = await expenseRepository.getById(input.params.id, context);
    template.render({ expense }, out);
};