import { createApp } from "vue";
import App from "./App";

import store from "@/store";
import router from "@/router";
import { Button } from "vant";

const app = createApp(App);

app.use(Button);
app.use(router);
app.use(store);
app.mount("#app");
