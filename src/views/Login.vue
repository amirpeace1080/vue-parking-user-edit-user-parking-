<template>
  <div class="login-page">
    <div class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form class="box">
                <div class="field has-text-centered">
                  <img
                    src="https://dev.zeomarket.com/pub/media/wysiwyg/ves_gosmart/loginlogo-mobile.png"
                    width="110"
                  />
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      type="email"
                      class="input"
                      placeholder="Please Enter Email"
                      required
                      v-model="email"
                    />
                    <span class="icon is-left">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input
                      type="password"
                      class="input"
                      placeholder="Please Enter Password"
                      required
                      v-model="password"
                    />
                    <span class="icon is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>

                <div class="field is-left">
                  <button @click="login" class="button is-info">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login(){
            let email = this.email
            let password = this.password
            this.$store.dispatch('login', {email, password})
            .then(()=>{
                this.$router.push('/')
            })
        }
    },
};
</script>

<style>
</style>