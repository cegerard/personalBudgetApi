'use strict';

module.exports = (app) => {
    const Budgetline = app.models.budgetLine;
    const Expense = app.models.expense;

    Budgetline.total = (id) => {
        return Expense.find({ where: { budgetLine: id } })
            .then((expenses) => {
                return expenses.reduce((total, expense) => {
                    return total + expense.amount;
                }, 0);
            });
    }
}