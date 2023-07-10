<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="#">
          <img
            src="@/assets/LOGOSS.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Savesmart</a
        >
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <!-- TU SU TI LINKOVI OD NAVBARA-->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link"> Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/goals" class="nav-link"> Štednja</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Login" class="nav-link"> Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link"> Signup</router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" @click="signout">Signout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view class="min-vh-100"></router-view>

    <footer class="bg-light text-center text-white mt-auto mb-0">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
import { auth } from "@/Warehouse/Auth";
export default {
  name: "App",
  components: {},
  methods: {
    signout() {
      auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
