import App from "./App.vue";
import Route from "./route";
import Store from "./store";
import Pear from "./component";
import { createApp } from "vue";
import "./assets/css/index.less";
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.less";
import directive from "./directive";
import i18n from './locale';
import "./mock";


const app = createApp(App);
app.use(Antd);
app.use(Pear);
app.use(Store);
app.use(Route);
app.use(i18n)

Object.keys(directive).forEach(d => {
  app.directive(d, directive[d])
})

app.mount("#app");

export default app
