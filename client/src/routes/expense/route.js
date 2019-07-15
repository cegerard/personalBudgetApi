const expenseRepository = require('../../infrastructure/repositories/expense');
const template = require('./index.marko');

exports.paths = '/expenses/:id';

exports.handler = async (input, out) => {
    const expense = await expenseRepository.getExpenseById(input.params.id);
    template.render({ expense }, out);
};