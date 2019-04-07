const expenseService = require('../../core/expense/expenseService');
const template = require('./index.marko');

exports.paths = '/expense/:id';

exports.handler = async (input, out) => {
    const expense = await expenseService.getExpense(input.params.id);
    template.render({ expense }, out);
};