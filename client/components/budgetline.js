// Budgetline Vue object
const budgetlineView = {
    data: function () {
        return {
            budgetline:{}
        }
    },
    mixins: [budgetlineApi],
    created: function () {
        this.getBudgetline(this.$route.params.id)
            .then((budgetline) => {
                this.budgetline = budgetline;
            })
    },
    template: `
    <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
                <h4 class="card-title">
                    {{budgetline.name}}
                </h4>
                <p class="card-text">Budget: {{budgetline.budget}}€</p>
            </div>
        </div>
    </div>
    `
};