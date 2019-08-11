'use strict';

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

  createBudget() {
    console.log(this.state.createForm);
  }
}
