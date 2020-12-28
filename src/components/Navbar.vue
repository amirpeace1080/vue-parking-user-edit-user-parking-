<template>
  <div class="card mb-3">
    <nav class="card-body navbar" role="navigation" dir="rtl" style="height:65px">
      <div class="navbar-brand" dir="ltr">
        <router-link to="/" class="navbar-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLbhA1au237puisZjVuDmDmJ4WEiG1MvBmA&usqp=CAU"
            class="mr-3"
            width="112"
          />
        </router-link>

        <!-- size mobile -->
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <!-- end size mobile -->
      </div>

      <div id="navbarBasicExample" class="navbar-menu" dir="ltr">
        <div class="navbar-start">

          <div class="control navbar-item ml-3 mouse">
            <span class="icon" @click="logout">
              <i class="fa fa-sign-out fa-2x fa-flip-horizontal"></i>
            </span>
          </div>

        </div>

        <div class="navbar-end">
            
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div> -->

          <a class="navbar-item">
            <router-link to="/users" class="is-size-4">
              کاربران
            </router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/parking" class="is-size-4">
              پارکینگ
            </router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/" class="is-size-4">
              خانه
            </router-link>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    logout(){
      this.$store.dispatch("logout").then(()=>{
        this.$router.push('/login')
      })
    }
  },
};
</script>

<style>
.router-link-exact-active{
    color: black;
}

.mouse{
  cursor: pointer;
}
</style>