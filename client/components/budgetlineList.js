// Budgetline card object component
const budgetLineCard = {
    data: function () {
        return {}
    },
    props: ['budgetline'],
    computed: {
        available: function() {
            let expenses = 0;
            if(!isNaN(this.budgetline.totalExpense)) {
                expenses = this.budgetline.totalExpense;
            }
            return this.budgetline.budget - expenses;
        }
    },
    created: function () {
        this.$parent.getBudgetTotalExpense(this.budgetline.id)
            .then((total) => {
                this.budgetline.totalExpense = total;
            })
    },
    template: `
    <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{ name: 'budgetline', params: { id: budgetline.id }}">{{budgetline.name}}</router-link>
                </h4>
                <p class="card-text">Budget: {{budgetline.budget}}€</p>
                <p class="card-text">Expenses: {{budgetline.totalExpense}}€</p>
                <p class="card-text">Available: {{available}}€</p>
            </div>
        </div>
    </div>
    `
};

// Budgetline list Vue object
const budgetlinesListView = {
    data: function () {
        return {
            budgetLines: []
        }
    },
    mixins: [budgetlineApi],
    created: function () {
        this.getBudgetlines()
            .then((budgetLines) => {
                budgetLines.forEach(budgetline => {
                    budgetline.totalExpense = 'na';
                });
                this.budgetLines = budgetLines;
            })
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
                    v-bind:budgetline="budgetLine"
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
};
