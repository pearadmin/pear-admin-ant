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
          <card-base color="rgb(149, 222, 100)" icon="CloudFilled" title="首页">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base
            color="rgb(255, 156, 110)"
            icon="CustomerServiceFilled"
            title="访问"
          >
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(179, 127, 235)" icon="MailFilled" title="邮件">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base
            color="rgb(255, 214, 102)"
            icon="NotificationFilled"
            title="消息"
          >
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(92, 219, 211)" icon="SignalFilled" title="统计">
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base
            color="rgb(255, 133, 192)"
            icon="TrophyFilled"
            title="排名"
          >
          </card-base>
        </a-col>
        <a-col span="3">
          <card-base color="rgb(255, 192, 105)" icon="BellFilled" title="通知">
          </card-base>
        </a-col>
        <a-col :span="24">
          <a-card>
            <a-row>
              <a-col :span="24">
                <a-tabs>
                  <a-tab-pane key="1" tab="销量">
                    <a-row>
                      <a-col span="24">
                        <div
                          id="echartContainer"
                          style="width: 100%; height: 300px"
                        ></div>
                      </a-col>
                    </a-row>
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="排行" force-render> </a-tab-pane>
                </a-tabs>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="线上热门搜索">
            <a-row gutter="10">
              <a-col :span="12">
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
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card>
                  <a-statistic
                    title="Idle"
                    :value="9.3"
                    :precision="2"
                    suffix="%"
                    class="demo-class"
                    :value-style="{ color: '#cf1322' }"
                  >
                    <template v-slot:prefix>
                      <arrow-down-outlined />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="销售类别占比">
            <a-row>
                <a-col :span="12">
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
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card>
                <a-statistic
                  title="Idle"
                  :value="9.3"
                  :precision="2"
                  suffix="%"
                  class="demo-class"
                  :value-style="{ color: '#cf1322' }"
                >
                  <template v-slot:prefix>
                    <arrow-down-outlined />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
  </div>
</template>
<script>
var echarts = require("echarts");
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
  setup() {
    const data = [
      {
        title: "Ant Design Title 1",
      },
      {
        title: "Ant Design Title 2",
      },
      {
        title: "Ant Design Title 3",
      },
      {
        title: "Ant Design Title 4",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Address", dataIndex: "address", key: "address" },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        slots: { customRender: "action" },
      },
    ];

    const datas = [
      {
        key: 1,
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        description:
          "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
      },
      {
        key: 2,
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        description:
          "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
      },
      {
        key: 3,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        description:
          "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
      },
    ];
    return {
      data,
      columns,
      datas,
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echartContainer"));
    var option = {
      backgroundColor: "#fff",
      title: {
        top: 10,
        left: 15,
        textStyle: {
          color: "#35598d",
          fontSize: 16,
          fontWeight: "normal",
        },
      },
      tooltip: {
        trigger: "axis",
        formatter: "{b}：{c}",
      },
      grid: {
        left: "5%",
        right: "6%",
        bottom: "3%",
        top: "20%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "策略1",
          "策略2",
          "策略3",
          "策略4",
          "策略5",
          "策略6",
          "策略7",
          "策略8",
          "策略9",
        ],
        axisLabel: {
          //坐标轴字体颜色
          textStyle: {
            color: "#9eaaba",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#e5e5e5",
          },
        },
        axisTick: {
          //y轴刻度线
          show: false,
        },
        splitLine: {
          //网格
          show: false,
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          //坐标轴字体颜色
          textStyle: {
            color: "#9eaaba",
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          //y轴刻度线
          show: false,
        },
        splitLine: {
          //网格
          show: true,
          lineStyle: {
            color: "#dadde4",
            type: "dashed", //坐标网线类型
          },
        },
      },
      series: {
        name: "",
        type: "bar",
        barWidth: "40%", //柱子宽度
        itemStyle: {
          //柱子颜色
          normal: {
            borderWidth: 2,
            borderColor: "#008dff",
            color: "#008dff",
          },
        },
        data: [320, 332, 301, 334, 390, 330, 320, 230, 156],
      },
    };
    myChart.setOption(option);
    window.onresize = function () {
      myChart.resize();
    };
    setTimeout(function () {
      window.onresize = function () {
        myChart.resize();
      };
    }, 200);
  },
};
</script>
<style scoped>
.ant-divider-horizontal {
  margin: 15px, 0px;
}
</style>