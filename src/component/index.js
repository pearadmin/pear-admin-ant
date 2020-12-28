import PageHeader from "./pageHeader";
import PageLayout from "./pageLayout";
import PageFooter from "./pageFooter";
import CardBase from "./cardBase";
import Count from "./count";

const components = [
    PageFooter,PageHeader, PageLayout, CardBase, Count
];

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

export default {
    install,
    PageFooter, PageHeader, PageLayout, CardBase, Count
}
