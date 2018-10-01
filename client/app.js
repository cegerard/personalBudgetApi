// Instanciate router
const router = new VueRouter({
  routes: [
    { path: '/', component: homeView },
    { path: '/budgetlines', component: budgetlinesListView },
    { path: '/budgetlines/:id',  name: 'budgetline', component: budgetlineView }
  ]
});

// Application root Vue initialization
new Vue({
  el: '#app',
  data: {
    currentUser: {
      logged: false,
      id: '',
      token: ''
    }
  },
  router,
  mixins: [loginApi]
});