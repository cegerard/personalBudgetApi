const expenseService = require('../../infrastructure/expenseService');
const template = require('./index.marko');

exports.paths = '/expenses/:id';

exports.handler = async (input, out) => {
    const expense = await expenseService.getExpense(input.params.id);
    template.render({ expense }, out);
};