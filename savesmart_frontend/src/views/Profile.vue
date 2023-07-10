<template>
  <div class="mt-5 container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <ProfileComp></ProfileComp>
        <PrimanjaComp></PrimanjaComp>

        <!-- ###############################FRENDIČI#####################-->
        <div class="row mt-5 text-break">
          <h3>Tvoji prijatelji</h3>
          <p class="text-secondary ms-3">{{ friendsCount }} prijatelja</p>
        </div>
        <div class="row">
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><h6>prijatelj 1</h6></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center">
              <h6 class="">prijatelj 1</h6>
            </div>
          </div>
          <button class="btn btn-primary" @click="addFriend">
            Dodaj prijatelja
          </button>
        </div>
      </div>

      <div class="col"></div>
    </div>

    <!--MODAL #################################################-->

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
import ProfileComp from "@/components/ProfileComp.vue";
import PrimanjaComp from "@/components/PrimanjaComp.vue";
export default {
  name: "ProfileStart",
  components: { "my-upload": myUpload, ProfileComp, PrimanjaComp },

  data() {
    return {
      friendsCount: 0,
      Ime: {},
      more: {},
      avatarParams: {},
      show: false,
      imgDataUrl: "",
      displayDate: "0 / 0 / 0",
      primanja: [
        { izvor: "Plaća", iznosIzv: 2000, odvojio: 500 },
        { izvor: "Iznajmljivanje", iznosIzv: 1000, odvojio: 300 },
        { izvor: "Dodatno", iznosIzv: 1000, odvojio: 300 },
      ],
      total: {
        stednja: 0,
        primanja: 0,
      },
    };
  },
  mounted() {
    this.Get();
    this.izracunajTotal(this.total);
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
      console.log(this.more);
      this.imgDataUrl = this.more.avatar;
    },
    izracunajTotal(total) {
      this.primanja.forEach((element) => {
        total.primanja += element.iznosIzv;
        total.stednja += element.odvojio;
      });
    },
    toggleShow() {
      this.show = !this.show;
    },
    async cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", field);
      let avatarParams = {
        _id: this.Ime._id,
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
