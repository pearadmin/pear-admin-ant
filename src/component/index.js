import PageHeader from "./pageHeader";
import PageLayout from "./pageLayout";
import CardBase from "./cardBase";

// 组件列表
const components = [
    PageHeader, PageLayout, CardBase
];

// 组件安装
const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

// 暴漏组件
export default {
    install,
    PageHeader, PageLayout, CardBase
}