const loginApi = {
    methods: {
        login : function (email, password) {
            return axios.post('/api/endUsers/login',{
                "email": email,
                "password": password
            })
            .then((response) => {
                this.currentUser.id = response.data.userId;
                this.currentUser.token = response.data.id;
                this.currentUser.logged = true;
            })
            .catch((error) => {
                console.log(error);
                this.currentUser.logged = false;
            });
        },
        logout: function() {
            return axios.post('/api/endUsers/logout')
                .then((response) => {
                    this.currentUser.logged = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}