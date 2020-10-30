<template>
  <div id="home">
    <div style="padding: 10px">
      <a-row :gutter="[15, 15]">
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Feedback"
              :value="14.38"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#cf1322' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <Arrow-up-outlined />
              </template>
            </a-statistic>
            <a-divider />
            <a-progress :percent="40" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Idle"
              :value="10.13"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#3f8600' }"
            >
              <template v-slot:prefix>
                <Arrow-down-outlined />
              </template>
            </a-statistic>
            <a-divider />
            <a-progress :percent="30" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Feedback"
              :value="15.38"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#cf1322' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <Arrow-up-outlined />
              </template>
            </a-statistic>
            <a-divider />
            <a-progress :percent="50" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Idle"
              :value="15.2"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#3f8600' }"
            >
              <template v-slot:prefix>
                <Arrow-down-outlined />
              </template>
            </a-statistic>
            <a-divider />
            <a-progress :percent="60" />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
};
</script>
<style scoped>
.ant-divider-horizontal {
  margin: 15px, 0px;
}
</style>