'use strict';

const jsCookie = require('js-cookie');

const expenseRepository = require('../../infrastructure/repositories/expense');
const navigationService = require('../../infrastructure/ui/navigationService');

module.exports = class {
  onCreate(input) {
    const initForm = {
      name: '',
      amount: 0,
      comment: '',
      type: 'Card',
      date: new Date(),
      budgetId: '',
    };

    if (input.expense) {
      this.expenseId = input.expense.id;
      initForm.name = input.expense.name;
      initForm.amount = input.expense.amount;
      initForm.comment = input.expense.comment;
      initForm.type = input.expense.type;
      initForm.date = new Date(input.expense.date);
      initForm.budgetId = input.expense.budgetLine;
    }

    // Init component state
    this.state = {
      createForm: initForm,
      budgetList: input.budgetList,
    };
  }

  setName(event) {
    this.state.createForm.name = event.target.value;
  }

  setAmount(event) {
    this.state.createForm.amount = event.target.value;
  }

  setComment(event) {
    this.state.createForm.comment = event.target.value;
  }

  setType(event) {
    this.state.createForm.type = event.target.value;
  }

  setDate(event) {
    this.state.createForm.date = new Date(event.target.value);
  }

  setBudgetId(event) {
    this.state.createForm.budgetId = event.target.value;
  }

  async saveExpense() {
    // TODO move this logic into a Budget service
    // to keep this component responsible of display purpose
    await expenseRepository.upsert(
      {
        name: this.state.createForm.name,
        amount: this.state.createForm.amount,
        comment: this.state.createForm.comment,
        type: this.state.createForm.type,
        date: this.state.createForm.date,
        budgetLine: this.state.createForm.budgetId,
      },
      {
        expenseId: this.expenseId,
        userId: jsCookie.get('userId'),
        token: jsCookie.get('token'),
      },
    );
    navigationService.navigate('/expenses');
  }
};
