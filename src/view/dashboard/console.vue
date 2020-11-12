<template>
  <div id="home">
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="6">
          <a-card>
            <p-count
              startVal="5500"
              endVal="6334.32"
              decimals="2"
              speed="300"
            />
            <a-progress style="margin-top: 16px" :percent="30" size="small" />
            <a-divider />
            <div class="card-left">访问量</div>
            <div class="card-right">68 万</div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <p-count
              startVal="4500"
              endVal="5303.10"
              decimals="2"
              speed="300"
            />
            <a-progress
              style="margin-top: 16px"
              :percent="50"
              size="small"
              status="active"
            />
            <a-divider />
            <div class="card-left">销售量</div>
            <div class="card-right">23 万</div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <p-count
              startVal="6500"
              endVal="7600.00"
              decimals="2"
              speed="300"
            />
            <a-progress style="margin-top: 16px" :percent="30" size="small" />
            <a-divider />
            <div class="card-left">转化率</div>
            <div class="card-right">60 %</div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <p-count
              startVal="4000"
              endVal="4500.00"
              decimals="2"
              speed="300"
            />
            <a-progress
              style="margin-top: 16px"
              :percent="50"
              size="small"
              status="active"
            />
            <a-divider />
            <div class="card-left">用户量</div>
            <div class="card-right">578 人</div>
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
            <a-tabs>
              <a-tab-pane key="1" tab="销量">
                <a-row>
                  <a-col :span="17">
                    <div
                      id="echartContainer"
                      style="width: 85%; height: 320px"
                    ></div>
                  </a-col>
                  <a-col :span="7">
                    <a-row style="margin: 22px">
                      <a-col span="2"><div>1</div></a-col>
                      <a-col span="18">高新区1号店</a-col>
                      <a-col span="4">3423.32</a-col>
                    </a-row>
                    <a-row style="margin: 22px">
                      <a-col span="2"><span>2</span></a-col>
                      <a-col span="18">高新区2号店</a-col>
                      <a-col span="4">3423.32</a-col>
                    </a-row>
                    <a-row style="margin: 22px">
                      <a-col span="2"><span>3</span></a-col>
                      <a-col span="18">高新区3号店</a-col>
                      <a-col span="4">3423.32</a-col>
                    </a-row>
                    <a-row style="margin: 22px">
                      <a-col span="2"><span>4</span></a-col>
                      <a-col span="18">高新区4号店</a-col>
                      <a-col span="4">3423.32</a-col>
                    </a-row>
                    <a-row style="margin: 22px">
                      <a-col span="2"><span>5</span></a-col>
                      <a-col span="18">高新区5号店</a-col>
                      <a-col span="4">3423.32</a-col>
                    </a-row>
                    <a-row style="margin: 22px">
                      <a-col span="2"><span>6</span></a-col>
                      <a-col span="18">高新区6号店</a-col>
                      <a-col span="4">3423.32</a-col>
                    </a-row>
                    <a-row style="margin: 22px">
                      <a-col span="2"><span>7</span></a-col>
                      <a-col span="18">高新区7号店</a-col>
                      <a-col span="4">3423.32</a-col>
                    </a-row>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane key="2" tab="排行" force-render> </a-tab-pane>
            </a-tabs>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="线上热门搜索">
            <a-row :gutter="10">
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
              <a-col span="24">
                <a-table
                  :columns="columns"
                  :data-source="datas"
                  style="margin-top: 10px"
                />
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="销售类别占比">
            <a-row :gutter="10">
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
              <a-col span="24">
                <a-table
                  :columns="columns"
                  :data-source="datas"
                  style="margin-top: 10px"
                />
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
      { title: "排名", dataIndex: "key", key: "key" },
      { title: "门店", dataIndex: "name", key: "name" },
      { title: "销量", dataIndex: "age", key: "age" },
      { title: "地址", dataIndex: "address", key: "address" },
    ];

    const datas = [
      {
        key: 1,
        name: "Bai Liang",
        age: 1332334.0,
        address: "Today me living in Sidney No. 1 Lake Park.",
      },
      {
        key: 2,
        name: "Bai Liang",
        age: 3543241.0,
        address: "Today me living in Sidney No. 1 Lake Park.",
      },
      {
        key: 3,
        name: "Bai Liang",
        age: 4745244.0,
        address: "Today me living in Sidney No. 1 Lake Park.",
      },
      {
        key: 4,
        name: "Bai Liang",
        age: 3235244.0,
        address: "Today me living in Sidney No. 1 Lake Park.",
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
					tooltip: {
						trigger: 'axis'
					},
					xAxis: [{
						type: 'category',
						data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
						axisLine: {
							lineStyle: {
								color: "#999"
							}
						}
					}],
					yAxis: [{
						type: 'value',
						splitNumber: 4,
						splitLine: {
							lineStyle: {
								type: 'dashed',
								color: '#DDD'
							}
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: "#333"
							},
						},
						nameTextStyle: {
							color: "#999"
						},
						splitArea: {
							show: false
						}
					}],
					series: [{
						name: '课时',
						type: 'line',
						data: [23, 60, 20, 36, 23, 85],
						lineStyle: {
							normal: {
								width: 8,
								color: {
									type: 'linear',

									colorStops: [{
										offset: 0,
										color: '#A9F387' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#48D8BF' // 100% 处的颜色
									}],
									globalCoord: false // 缺省为 false
								},
								shadowColor: 'rgba(72,216,191, 0.3)',
								shadowBlur: 10,
								shadowOffsetY: 20
							}
						},
						itemStyle: {
							normal: {
								color: '#fff',
								borderWidth: 10,
								/*shadowColor: 'rgba(72,216,191, 0.3)',
								shadowBlur: 100,*/
								borderColor: "#A9F387"
							}
						},
						smooth: true
					}]
				};
    myChart.setOption(option);

    window.addEventListener("resize", () => {
      myChart.resize();
    });
    window.onresize = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {}, 300);
    };
  },
};
</script>
<style scoped>
.ant-divider-horizontal {
  margin-bottom: 10px !important;
}
.card-left {
  display: inline;
}
.card-right {
  float: right;
}
</style>