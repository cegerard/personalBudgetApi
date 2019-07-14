'use strict';

const expenseRepository = require('./repositories/expense/ExpenseInMemoryRepository'); // TODO get repository depending on start up environement
const budgetService = require('./budgetsService');

class ExpenseService {
  constructor(repository) {
    this.repository = repository;
  }

  getExpenses() {
    return this.repository.getAllExpenses();
  }

  async getExpense(expenseId) {
    const expense = await this.repository.getExpenseById(expenseId);
    const budget = await budgetService.getBudget(expense.budgetLine);
    expense.budgetLine = budget.name; // replace the budgetId by the budget name
    return expense;
  }
}

module.exports = new ExpenseService(expenseRepository);
