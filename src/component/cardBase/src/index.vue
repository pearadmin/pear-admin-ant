<template>
  <a-card hoverable class="card-base">
    <div :style="{ color: color }" class="card-base-icon">
      <MenuIcon></MenuIcon>
    </div>
    <div class="card-base-title">
      {{ title }}
    </div>
  </a-card>
</template>
<script>
import * as Icons from "@ant-design/icons-vue";
export default {
  name: "card-base",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const MenuIcon = Icons[props.icon] || {};

    return {
      MenuIcon,
    };
  },
};
</script>
<style>
.card-base {
  border-radius: 6px;
}
.card-base .ant-card-body {
  padding: 14px;
}
.card-base-icon {
  text-align: center;
  font-size: 30px;
}
.card-base-title {
  text-align: center;
  font-size: 14px;
  margin-top: 6px;
}
</style>