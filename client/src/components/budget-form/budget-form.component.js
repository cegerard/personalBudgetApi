'use strict';

const jsCookie = require('js-cookie');

const budgetRepository = require('../../infrastructure/repositories/budget');
const navigationService = require('../../infrastructure/ui/navigationService');

module.exports = class {
  onCreate(input) {
    const initForm = {
      name: '',
      amount: 0,
      description: '',
      period: 'monthly',
      date: new Date(),
    };

    if (input.budget) {
      this.budgetId = input.budget.id;
      initForm.name = input.budget.name;
      initForm.amount = input.budget.budget;
      initForm.description = input.budget.description;
      initForm.period = input.budget.period;
      initForm.date = new Date(input.budget.startDate);
    }

    // Init component state
    this.state = {
      createForm: initForm,
    };
  }

  setName(event) {
    this.state.createForm.name = event.target.value;
  }

  setAmount(event) {
    this.state.createForm.amount = event.target.value;
  }

  setDescription(event) {
    this.state.createForm.description = event.target.value;
  }

  setPeriod(event) {
    this.state.createForm.period = event.target.value;
  }

  setDate(event) {
    this.state.createForm.date = new Date(event.target.value);
  }

  async saveBudget() {
    // TODO move this logic into a Budget service
    // to keep this component responsible of display purpose
    await budgetRepository.upsert(
      {
        name: this.state.createForm.name,
        budget: this.state.createForm.amount,
        description: this.state.createForm.description,
        period: this.state.createForm.period,
        startDate: this.state.createForm.date,
      },
      {
        budgetId: this.budgetId,
        userId: jsCookie.get('userId'),
        token: jsCookie.get('token'),
      },
    );
    navigationService.navigate('/budgets');
  }
};
