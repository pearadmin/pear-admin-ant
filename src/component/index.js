import { App } from "vue";
import PageHeader from "./pageHeader";
import PageLayout from "./pageLayout";
'./pageHeader/index.js';

const components = [
    PageHeader,PageLayout
  ];

  const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

export default{ 
    install,
    PageHeader,PageLayout
}