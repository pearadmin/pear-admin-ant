import { createApp } from 'vue'
import App from './App.vue';
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './assets/css/index.scss';
import components from './component';

const app = createApp(App);

app.use(Antd);
app.use(store);
app.use(components);
app.use(router);
app.mount('#app');
