<template>
    <a-menu-item :key="item.path" v-if="!hasChildren(item)">
      <template #icon>
        <SettingOutlined />
      </template>
      {{ item.meta.title }}
    </a-menu-item>
    <a-sub-menu :key="item.path" v-else>
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>
        {{ item.meta.title }}
      </template>
      <template v-for="child in item.children" :key="child.path">
        <sub-menu v-if="!child.hidden" :item="child"> </sub-menu>
      </template>
    </a-sub-menu>
</template>
<script>
export default {
  name: "SubMenu",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const hasChildren = function (item) {
      return item.children != undefined;
    };

    return {
      hasChildren,
    };
  },
};
</script>