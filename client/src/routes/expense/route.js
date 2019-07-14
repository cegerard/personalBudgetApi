const expenseRepository = require('../../infrastructure/repositories/expense/ExpenseInMemoryRepository');
const template = require('./index.marko');

exports.paths = '/expenses/:id';

exports.handler = async (input, out) => {
    const expense = await expenseRepository.getExpenseById(input.params.id);
    console.log(expense);
    template.render({ expense }, out);
};