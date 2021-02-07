import { createApp } from "vue";
import Antd from "ant-design-vue/es";
import App from "./App.vue";
import Router from "./router";
import Store from "./store";
import Pear from "./component";
import "./assets/css/index.less";
import "ant-design-vue/dist/antd.less";
import "./mock";
import directives from "./directives"

const app = createApp(App);
app.use(Antd);
app.use(Pear);
app.use(Store);
app.use(Router);

Object.keys(directives).forEach(directive => {
  app.directive(directive, directives[directive])
})

app.mount("#app");

export default app
