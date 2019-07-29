const expenseRepository = require('../../infrastructure/repositories/expense');
const template = require('./index.marko');

exports.handler = async (input, out) => {
    const expenses = await expenseRepository.getAll();
    template.render({ expenses }, out);
};