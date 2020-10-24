<template>
  <div id="home">
    <a-card>
      <a-statistic
        title="Feedback"
        :value="14.38"
        :precision="2"
        suffix="%"
        :value-style="{ color: '#3f8600' }"
        style="margin-right: 50px"
      >
        <template v-slot:prefix>
          <Arrow-up-outlined />
        </template>
      </a-statistic>
    </a-card>
    <div style="padding: 10px">
      <a-row :gutter="[15, 15]">
        <a-col :span="6">
          <a-card title="今日访问">
            <a-statistic
              title="Feedback"
              :value="14.38"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <Arrow-up-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card title="本月访问">
            <a-statistic
              title="Idle"
              :value="10.13"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template v-slot:prefix>
                <Arrow-down-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card title="今日下载">
            <a-statistic
              title="Feedback"
              :value="15.38"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <Arrow-up-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card title="本周下载">
            <a-statistic
              title="Idle"
              :value="15.2"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template v-slot:prefix>
                <Arrow-down-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="18">
          <a-card>
            <a-tabs default-active-key="1">
              <a-tab-pane key="1" tab="Tab 1"> Tab 1 </a-tab-pane>
              <a-tab-pane key="3" tab="Tab 3"> Tab 3 </a-tab-pane>
            </a-tabs>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card> </a-card>
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