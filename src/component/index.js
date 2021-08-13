import Header from "./header/index";
import Layout from "./layout/index";
import Footer from "./footer/index";
import CardBase from "./cardBase/index";
import Count from "./count/index";
import Table from './table/index';
import Query from './query/index';

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
