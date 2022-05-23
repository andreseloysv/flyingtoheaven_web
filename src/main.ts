import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from "vue-meta";

const app = createApp({
  render: () => h(App),
});

app.use(createMetaManager());
app.use(router);

app.mount("#app");
