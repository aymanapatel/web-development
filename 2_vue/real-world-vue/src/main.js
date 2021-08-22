// Root component
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Mount to ID app (Check in `index.html`)
createApp(App).use(store).use(router).mount("#app");
