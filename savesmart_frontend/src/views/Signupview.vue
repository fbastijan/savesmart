<template>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
          <div class="px-5 ms-xl-4">
            <i
              class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
              style="color: #709085"
            ></i>
            <div class="d-flex flex-row">
              <div class="my-auto">
                <img
                  src="../assets/LOGOSS.png"
                  style="width: 3rem; height: 3rem"
                />
              </div>
              <div class="my-auto ms-3">
                <h5>Save Smart</h5>
              </div>
            </div>
          </div>

          <div
            class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
          >
            <form style="width: 23rem">
              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                Sign up
              </h3>
              <!-- email adresa-->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example18"
                  class="form-control form-control-lg"
                  v-model="email"
                />

                <label class="form-label" for="form2Example18"
                  >Email address</label
                >
              </div>
              <!-- name-->
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="form2Example18"
                  class="form-control form-control-lg"
                  v-model="name"
                />

                <label class="form-label" for="form2Example18">Full Name</label>
              </div>
              <!-- Username-->
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="aaaaaaaa"
                  class="form-control form-control-lg"
                  v-model="username"
                />
                <label class="form-label" for="form2Example18">Username</label>
              </div>
              <!-- Password-->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example28"
                  class="form-control form-control-lg"
                  v-model="password"
                />
                <label class="form-label" for="form2Example28">Password</label>
              </div>
              <!-- confirm pass-->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="aaaaaaaa"
                  class="form-control form-control-lg"
                  v-model="confirm_password"
                />
                <label class="form-label" for="form2Example28"
                  >Confirm Password</label
                >
              </div>
              <!-- BUTTON-->
              <div class="pt-1 mb-4">
                <button
                  class="btn btn-info btn-lg btn-block"
                  type="button"
                  @click="signup"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../assets/image1_1024_1024_watermark.jpg"
            alt="Login image"
            class="w-100 vh-100"
            style="object-fit: cover; object-position: left"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { auth } from "@/Warehouse/Auth";
export default {
  name: "SignupView",
  data() {
    return {
      email: "",
      username: "",
      name: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    signup() {
      let prikupljeno = {
        email: this.email,
        username: this.username,
        name: this.name,
        password: this.password,
        confirm_password: this.confirm_password,
      };
      auth
        .signup(prikupljeno)
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
