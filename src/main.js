import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

//primevue
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Chart from "primevue/chart";

//component
import NavBar from "./components/NavBar.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("NavBar", NavBar);
app.component("Chart", Chart);

app.mount("#app");
