<template>
  <div class="edit-parking mt-3">
    <h1 class="is-size-3 has-text-centered mt-2">ویرایش پارکینگ</h1>

    <div class="container mt-2" dir="ltr" style="width: 96%">
      <div class="columns mt-3" dir="rtl">
        <div class="column">
          <div class="field">
            <label class="label">آدرس پارکینگ:</label>
            <div class="control">
              <input type="text" class="input" :value="address" />
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">شهر:</label>
            <div class="control">
              <input type="text" class="input" :value="city" required />
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">ظرفیت فعلی:</label>
            <div class="control">
              <input
                type="number"
                class="input"
                :value="current_capacity"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div class="columns mt-3" dir="rtl">
        <div class="column">
          <div class="field">
            <label class="label">وضعیت:</label>
            <div class="control">
              <input type="text" class="input" :value="persian_status" />
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">انتخاب فایل:</label>
            <div class="control">
              <div class="file">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fa fa-upload"></i>
                    </span>
                    <span class="file-label"> Choose a file… </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="control mb-5">
        <button class="button mr-3 is-success">ذخیره</button>
        <button class="button is-danger">لغو</button>
      </p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "EditParking",
  data() {
    return {
      address: "",
      city: "",
      current_capacity: "",
      persian_status: "",
      file: "",
    };
  },
  mounted() {
    this.address = this.$route.query.address;
    this.city = this.$route.query.city;
    this.current_capacity = this.$route.query.current_capacity;
    this.persian_status = this.$route.query.persian_status;
    this.file = this.$route.query.file;
  },
};
</script>

<style>
</style>