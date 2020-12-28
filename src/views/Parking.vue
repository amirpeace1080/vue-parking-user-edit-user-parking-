<template>
  <div class="parking-page mt-2">
      <Navbar />
      <h1 class="has-text-centered is-size-3 mb-4"> لیست همه پارکینگ ها </h1>

    <div class="container" dir="rtl">
        <div class="columns is-multiline" v-for="(parking, index) in parkings" :key="index">
          <div class="column is-6-tablet is-6-dekstop is-3-widescreen" v-for="(parking, index) in parkings" :key="index">
            <div class="container mt-3" style="width: 96%">

                <div class="box is-grey-light is-size-6 hov">
                    <button class="delete"></button>
                    <p>
                        <span class="has-text-success">پارکینگ: </span>
                        <span class="mr-3"> {{parking.address}} </span>
                    </p>
                    <p>
                        <span class="has-text-success">شهر: </span>
                        <span class="mr-3"> {{ parking.city_key}} </span>
                    </p>
                    <p>
                        <span class="has-text-success">ظرفیت فعلی: </span>
                        <span class="mr-3"> {{ parking.current_capacity}} </span>
                    </p>
                    <p>
                        <span class="has-text-success">وضعیت: </span>
                        <span class="mr-3"> {{ parking.persian_status}} </span>
                    </p>
                    <p>
                        <span class="has-text-success">فایل ها: </span>
                        <span class="mr-3"> {{ parking.persian_status_files}} </span>
                    </p>
                    
                </div>
            </div>
          </div>
      </div>
    </div>
      
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
            parkings: []
        }
    },
    mounted() {
        this.$store.dispatch("parking")
        .then((resp)=>{
            this.parkings = resp.data.data
        })
    },
}
</script>

<style scoped>
.hov:hover{
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgb(0, 0, 0, 2);
}
.hov:active{
    transform: translateY(-1px);
}
</style>