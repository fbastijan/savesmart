import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000000,
});

const auth = {
  async login(username, password) {
    let response = await Service.post("/api/users/login", {
      username: username,
      password: password,
    });
    let user = response.data;
    localStorage.setItem("token", user.token);

    return true;
  },
  async signup(userDetail) {
    await Service.post("/api/users/register", {
      email: userDetail.email,
      name: userDetail.name,
      username: userDetail.username,
      password: userDetail.password,
      confirm_password: userDetail.confirm_password,
    });
    console.log("regao sam se ");
    return true;
  },

  logout() {
    localStorage.removeItem("token");
    sessionStorage.clear();
  },
  getUser() {
    return localStorage.getItem("token");
  },
};

export { Service, auth };
