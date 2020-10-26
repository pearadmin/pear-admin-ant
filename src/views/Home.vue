<template>
  <div id="home">
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
            <a-card-grid style="width: 33.33%; text-align: center">
              <a-card-meta
                title="Pear Admin"
                description="This is the description,This is the description"
              >
                <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-card-meta>
            </a-card-grid>
            <a-card-grid style="width: 33.33%; text-align: center">
              <a-card-meta
                title="Pear Admin"
                description="This is the description,This is the description"
              >
                <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-card-meta>
            </a-card-grid>
            <a-card-grid style="width: 33.33%; text-align: center">
              <a-card-meta
                title="Pear Admin"
                description="This is the description,This is the description"
              >
                <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-card-meta>
            </a-card-grid>
            <a-card-grid style="width: 33.33%; text-align: center">
              <a-card-meta
                title="Pear Admin"
                description="This is the description,This is the description"
              >
                <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-card-meta>
            </a-card-grid>
            <a-card-grid style="width: 33.33%; text-align: center">
              <a-card-meta
                title="Pear Admin"
                description="This is the description,This is the description"
              >
                <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-card-meta>
            </a-card-grid>
            <a-card-grid style="width: 33.33%; text-align: center">
              <a-card-meta
                title="Pear Admin"
                description="This is the description,This is the description"
              >
                <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-card-meta>
            </a-card-grid>
          </a-card>
          <a-card title="动态" style="margin-top: 15px">
            <a-list item-layout="horizontal" :data-source="data">
              <template v-slot:renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  >
                    <template v-slot:title>
                      <a href="https://www.antdv.com/">{{ item.title }}</a>
                    </template>
                    <template v-slot:avatar>
                      <a-avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-list item-layout="horizontal" :data-source="data">
              <template v-slot:renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  >
                    <template v-slot:title>
                      <a href="https://www.antdv.com/">{{ item.title }}</a>
                    </template>
                    <template v-slot:avatar>
                      <a-avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
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
export default {
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
  data() {
    return {
      data,
    };
  },
};
</script>