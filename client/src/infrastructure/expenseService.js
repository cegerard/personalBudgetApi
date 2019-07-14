'use strict';

const expenseRepository = require('./repositories/expense/ExpenseInMemoryRepository'); // TODO get repository depending on start up environement
const budgetService = require('./budgetsService');

const Expense = require('../domain/models/Expense');

class ExpenseService {
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Get expenses list from expenseRepository
   * @return a list of domain Expense instance
   */
  async getExpenses() {
    const expenses = await this.repository.getAllExpenses();
    const domainExpenses = expenses.map((exp) => {
      return new Expense(
        exp._id,
        exp.name,
        exp.amount,
        exp.date,
      );
    });
    return domainExpenses;
  }

    /**
   * Get an expense from budgetRepository
   * @returns domain Expense instance
   */
  async getExpense(expenseId) {
    const expense = await this.repository.getExpenseById(expenseId);
    const budget = await budgetService.getBudget(expense.budgetLine);
    return new Expense(
      expense._id,
      expense.name,
      expense.amount,
      expense.date,
      budget.name,
      expense.type,
      expense.comment,
    );
  }
}

module.exports = new ExpenseService(expenseRepository);
