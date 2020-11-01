<template>
  <div id="home">
    <page-layout>
      <a-row :gutter="[15, 15]">
        <a-col :span="6">
          <a-card>
          
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
           
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
           
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card> <BuildFilled /> </a-card>
        </a-col>
        <a-col :span="3">
          <a-card> <BuildFilled /> </a-card>
        </a-col>
        <a-col :span="3">
          <a-card> <BuildFilled /> </a-card>
        </a-col>
        <a-col :span="3">
          <a-card> <BuildFilled /> </a-card>
        </a-col>
        <a-col :span="3">
          <a-card> <BuildFilled /></a-card>
        </a-col>
        <a-col :span="3">
          <a-card> <BuildFilled /> </a-card>
        </a-col>
        <a-col :span="3">
          <a-card> <BuildFilled /></a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <BuildFilled />
          </a-card>
        </a-col>
        <a-col :span="24">
          <a-card> </a-card>
        </a-col>
        <a-col :span="12">
          <a-card> </a-card>
        </a-col>
        <a-col :span="12">
          <a-card> </a-card>
        </a-col>
      </a-row>
    </page-layout>
  </div>
</template>
<script>
import {
  BuildFilled,
} from "@ant-design/icons-vue";
export default {
  components: {
    BuildFilled,
  },
};
</script>
<style scoped>
.ant-divider-horizontal {
  margin: 15px, 0px;
}
</style>