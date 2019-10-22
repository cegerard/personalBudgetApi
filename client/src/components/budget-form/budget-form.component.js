'use strict';

const jsCookie = require('js-cookie');

const budgetRepository = require('../../infrastructure/repositories/budget');
const navigationService = require('../../infrastructure/ui/navigationService');

module.exports = class {
  onCreate() {
    // Init component state
    this.state = {
      createForm: {
        name: '',
        amount: 0,
        description: '',
        period: 'monthly',
        date: new Date()
      }
    };
  }

  setName(event) {
    this.state.createForm.name = event.target.value;
  }

  setAmount(event) {
    this.state.createForm.amount = event.target.value;
  }

  setDescription(event){
    this.state.createForm.description = event.target.value;
  }

  setPeriod(event) {
    this.state.createForm.period = event.target.value;
  }

  setDate(event) {
    this.state.createForm.date = new Date(event.target.value);
  }

  async createBudget() {
    await budgetRepository.create(
      {
        name: this.state.createForm.name,
        budget: this.state.createForm.amount,
        description: this.state.createForm.description,
        period: this.state.createForm.period,
        startDate: this.state.createForm.date
      },
      {
        userId: jsCookie.get('userId'),
        token: jsCookie.get('token')
      }
    );
    navigationService.navigate('/budgets');
  }
}
