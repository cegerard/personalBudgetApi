// Budgetline card object component
const budgetLineCard = {
    data: function () {
        return {}
    },
    props: ['budget'],
    template: `
    <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
                <h4 class="card-title">
                    <a href="#">{{budget.name}}</a>
                </h4>
                <p class="card-text">Budget: {{budget.budget}}€</p>
                <p class="card-text">Expenses: {{budget.expenses}}€</p>
                <p class="card-text">Available: {{budget.available}}€</p>
            </div>
        </div>
    </div>
    `
};

// Budgetline list Vue component
Vue.component('budgetline-list', {
    data: function () {
        return {
            budgetLines: [
                {
                    name: 'Budget1',
                    budget: 700,
                    expenses: 250,
                    available: 450
                },
                {
                    name: 'Budget2',
                    budget: 100,
                    expenses: 0,
                    available: 100
                },
                {
                    name: 'Budget3',
                    budget: 7000,
                    expenses: 500,
                    available: 6500
                }
            ]
        }
    },
    components: {
        'budgetline-card': budgetLineCard
    },
    template: `
        <div class="container">
            <h1 class="my-4">Budgetlines
                <small>List</small>
            </h1>
            <div class="row">
                <budgetline-card
                    v-for="budgetLine in budgetLines"
                    v-bind:key="budgetLine.id"
                    v-bind:budget="budgetLine"
                ></budgetline-card>
            </div>
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </div>
    `
})
