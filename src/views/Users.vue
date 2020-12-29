<template>
  <div class="user-page">
    <Navbar />
    <div class="containermt-5" dir="rtl" style="width:94%">
      <!-- <h1>{{ user[2] }}</h1> -->
      <h1 class="is-size-3 has-text-centered mt-2">لیست کاربران</h1>

      <table class="table mt-5">
  <thead>
    <tr>
      <th>آیدی</th>
      <th>نام</th>
      <th>نام خانوادگی</th>
      <th>نام کاربری</th>
      <th>تاریخ تولد</th>
      <th>محل سکونت</th>
      <th>تاریخ عضویت</th>
      <th>تصویر پروفایل</th>
      <th>آخرین بازدید</th>
      <th>عملیات</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(us, index) in user" :key="index">
      <th> {{ us.id }} </th>
      <td> {{ us&&us.info&&us.info.first_name}} </td>
      <td>{{us&&us.info&&us.info.last_name}}</td>
      <td>{{us.username}}</td>
      <td>{{us&&us.info&&us.info.birth_date}}</td>
      <td>{{us&&us.info&&us.info.city}}</td>
      <td>{{us&&us.info&us.info.created_at}}</td>
      <td><img :src="us&&us.info&&us.info.avatar" width="33"></td>
      <td>{{us&&us.info&&us.info.updated_at}}</td>
      <td>
          <!-- <p class="control">
        <button class="button is-small is-success is-rounded is-right">پروفایل</button>
        <button class="button is-small is-warning is-rounded is-left">پیام</button>
      </p> -->
      <button class="button is-small is-primary ml-1">پروفایل</button>
      <button class="button is-small is-info ">پیام</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Users",
  components: {
    Navbar,
  },
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.$store.dispatch("users").then((resp) => {
      this.user = resp.data.data;
      console.log(this.user);
    });
  },
};
</script>

<style>
</style>