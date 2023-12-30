import { createApp } from "vue";
import "./style.css";
// import store from "./store";
// import icons from "./icons"; // icon
// import components from "./components"; // icon

import axios from "./plugins/axios.js";
import eventBus from "./utils/eventBus.js";

import { registerPlugins } from "./utils/util.js";

import App from "./App.vue";
import router from "./router/index.ts";

const app = createApp(App);

const plugins = [router, axios, eventBus];

app.use(registerPlugins(plugins));

app.mount("#app");
