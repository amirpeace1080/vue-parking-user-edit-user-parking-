<template>
  <div class="user-page">
      <Navbar />
      <h1> {{ user }} </h1>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'Users',
    components:{
        Navbar
    },
    data() {
        return {
            user: []
        }
    },
    mounted() {
        this.$store.dispatch("users").then((resp)=>{
            this.user = resp.data.data
            console.log(this.user);
        })
    },
}
</script>

<style>

</style>