// Instanciate router
const router = new VueRouter({
  routes: [
    { path: '/', component: homeView },
    { path: '/budgetlines', component: budgetlinesListView }
  ]
});

// Application root Vue initialization
new Vue({
  el: '#app',
  data: {
    currentUser: {
      logged: false
    }
  },
  router,
  mixins: [loginApi]
});