<template>
  <div>
    <div v-if="loaded">
      <h1 class="mb-5">Tvoj profil</h1>
      <div class="row">
        <div class="col">
          <img
            :src="imgDataUrl"
            class="rounded float-start"
            alt=""
            onerror="this.src = 'https://i.gifer.com/VAyR.gif';"
          />
          <p>
            <a href="#!" @click="toggleShow" class="link-info">
              Promjeni sliku <i class="bi bi-pencil"></i
            ></a>
          </p>
        </div>
        <div class="col-9">
          <h5 class="text-break mt-2">{{ more.name }}</h5>

          <hr />
          <h5 class="text-break">Opis:</h5>

          <p class="text-break text-md">Jeo sam naranče i upao u predikament</p>
          <hr />
          <h5 class="text-break">Pridružio se</h5>
          <p class="text-beak text-md">
            {{ this.more.date }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="!loaded">
      <h1 class="mb-5">Tvoj profil</h1>
      <div class="row">
        <div class="col">
          <img
            src="https://i.gifer.com/VAyR.gif"
            class="rounded float-start"
            alt=""
          />
          <p>
            <a href="#!" @click="toggleShow" class="link-info">
              Promjeni sliku <i class="bi bi-pencil"></i
            ></a>
          </p>
        </div>
        <div class="col-9">
          <p aria-hidden="true" class="placeholder-glow">
            <span class="placeholder col-1"></span>
          </p>
          <hr />
          <h5 class="text-break">Opis:</h5>

          <p aria-hidden="true" class="placeholder-glow">
            <span class="placeholder col-6"></span>
          </p>
          <hr />
          <h5 class="text-break">Pridružio se</h5>
          <p aria-hidden="true" class="placeholder-glow">
            <span class="placeholder col-2"></span>
          </p>
        </div>
      </div>
    </div>
    <my-upload
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="200"
      :height="200"
      url=""
      lang-type="en"
      img-format="png"
      :no-circle="true"
      :no-square="true"
    ></my-upload>
  </div>
</template>

<script>
import { Profile } from "@/Warehouse/Profile";
import myUpload from "vue-image-crop-upload";
export default {
  name: "ProfileComp",

  components: {
    "my-upload": myUpload,
  },
  data() {
    return {
      imgDataUrl: "https://i.gifer.com/VAyR.gif",
      more: {},
      show: false,
      Ime: {},
      loaded: false,
    };
  },
  mounted() {
    this.Get();
  },
  methods: {
    async Get() {
      this.Ime = await Profile.getProfile();
      let pom = await Profile.getMore(this.Ime._id);
      this.more = {
        ...pom,
        opis: "Jeo sam naranče i upao u predikament",
      };
      this.friendsCount = this.more.friends.length;
      this.imgDataUrl = this.more.avatar;
      this.loaded = true;
    },
    toggleShow() {
      this.show = !this.show;
    },
    async cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", field);
      let avatarParams = {
        _id: this.info._id,
        avatar: imgDataUrl,
      };
      this.imgDataUrl = "";
      await Profile.setAvatar(avatarParams);

      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
  },
};
</script>
