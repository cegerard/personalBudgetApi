// Application root Vue initialization
new Vue({
  el: '#app',
  data: {
    currentUser: {
      logged: false
    }
  },
  mixins: [loginApi]
})