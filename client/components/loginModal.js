Vue.component('login-modal', {
    data: function () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signin: function () {
            this.$emit('signin', this.email, this.password);
        }
    },
    template: `
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <h3>Sign In</h3>
                    </div>

                    <form>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="userEmail">Email address</label>
                                <input type="email" v-model="email" class="form-control" id="userEmail" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="userPassword">Password</label>
                                <input type="password" v-model="password" class="form-control" id="userPassword" placeholder="Password">
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="modal-default-button btn btn-primary" @click="signin">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
    `
})