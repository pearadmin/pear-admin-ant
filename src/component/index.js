import Header from "./header/index.js";
import Layout from "./layout/index.js";
import Footer from "./footer/index.js";
import CardBase from "./cardBase/index.js";
import Count from "./count/index.js";
import Table from './table/index.js';
import Query from './query/index.js';

const components = [
    Footer,Header,Layout, CardBase, Count,Table, Query
];

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

export default {
    install,
    Footer, Header, Layout, CardBase, Count, Table, Query
}
