import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Croppa from "vue-croppa";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(Croppa);
