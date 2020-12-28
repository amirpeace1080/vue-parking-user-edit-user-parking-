<template>
  <div class="parking-page">
      <Navbar/>
      <h1> Parking Page</h1>
      <h2> {{ park }} </h2>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'Parking',
    components: {
        Navbar
    },
    data() {
        return {
            park: []
        }
    },
    mounted() {
        this.$store.dispatch("parking")
        .then((resp)=>{
            this.park = resp.data.data
        })
    },
}
</script>

<style>

</style>