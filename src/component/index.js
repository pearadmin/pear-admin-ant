import PageHeader from "./pageHeader";
import PageLayout from "./pageLayout";
import CardBase from "./cardBase";

const components = [
    PageHeader, PageLayout, CardBase
];

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

export default {
    install,
    PageHeader, PageLayout, CardBase
}