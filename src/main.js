import { createApp } from 'vue'
import App from './App.vue';
import Router from './router'
import Store from './store'
import Pear from './component';
import Antd from 'ant-design-vue';
import './assets/css/index.less';
import 'ant-design-vue/dist/antd.less';
import './mock'

const app = createApp(App);
app.use(Antd);
app.use(Store);
app.use(Pear);
app.use(Router);
app.mount('#app');
