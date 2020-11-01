<template>
  <div id="home">
    <page-layout>
      <a-row :gutter="[15, 15]">
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Feedback"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
            <a-progress style="margin-top: 15px" :percent="30" size="small" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Feedback"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
            <a-progress
              style="margin-top: 15px"
              :percent="50"
              size="small"
              status="active"
            />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Feedback"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
            <a-progress style="margin-top: 15px" :percent="30" size="small" />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic
              title="Feedback"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template v-slot:prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
            <a-progress
              style="margin-top: 15px"
              :percent="50"
              size="small"
              status="active"
            />
          </a-card>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(105, 192, 255)" icon="BuildFilled" title="用户">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(149, 222, 100)" icon="BuildFilled" title="首页">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(255, 156, 110)" icon="BuildFilled" title="访问">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(179, 127, 235)" icon="BuildFilled" title="用户">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(255, 214, 102)" icon="BuildFilled" title="用户">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(92, 219, 211)" icon="BuildFilled" title="用户">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(255, 133, 192)" icon="BuildFilled" title="用户">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(255, 192, 105)" icon="BuildFilled" title="用户">
          </card-base>
        </a-col>
        <a-col :span="24">
          <a-card>
            <a-row>
              <a-col :span="18"></a-col>
              <a-col :span="6"></a-col>
            </a-row>
          </a-card>
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
export default {
  components: {},
  setup() {},
};
</script>
<style scoped>
.ant-divider-horizontal {
  margin: 15px, 0px;
}
</style>