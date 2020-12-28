<template>
  <div class="card">
    <nav class="card-body navbar" role="navigation" dir="rtl">
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
          <a class="navbar-item"> Home </a>
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
export default {};
</script>

<style>
.router-link-exact-active{
    color: black;
}
</style>