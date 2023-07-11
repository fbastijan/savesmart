<template>
  <div class="mt-5 container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <ProfileComp></ProfileComp>
        <PrimanjaComp></PrimanjaComp>
        <FriendsComp :friendsCount="friendsCount"></FriendsComp>
      </div>

      <div class="col"></div>
    </div>

    <!--MODAL #################################################-->
  </div>
</template>

<script>
import { Profile } from "@/Warehouse/Profile";

import ProfileComp from "@/components/ProfileComp.vue";
import PrimanjaComp from "@/components/PrimanjaComp.vue";
import FriendsComp from "@/components/FriendsComp.vue";
export default {
  name: "ProfileStart",
  components: { ProfileComp, PrimanjaComp, FriendsComp },

  data() {
    return {
      friendsCount: 0,
      Ime: {},
      more: {},
      avatarParams: {},
      show: false,
      imgDataUrl: "",
      displayDate: "0 / 0 / 0",
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
    },
  },
};
</script>
