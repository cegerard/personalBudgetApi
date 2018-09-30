const budgetlineApi = {
    methods: {
        getBudgetlines : function () {
            const budgetlinesUrl = `/api/endUsers/${this.$root.currentUser.id}/budgetLines/`
            const headers = {
                'Authorization': this.$root.currentUser.token
            };
            return axios.get(budgetlinesUrl, { headers })
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },
        getBudgetTotalExpense: function(id) {
            const budgetlinesTotalUrl = `/api/budgetLines/${id}/total/`
            const headers = {
                'Authorization': this.$root.currentUser.token
            };
            return axios.get(budgetlinesTotalUrl, { headers })
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        }
    }
}