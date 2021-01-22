<template>
  <div>
    <a-card>
      <a-avatar
        :size="64"
        src="https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200"
      >
      </a-avatar>
      <span style="margin-left: 30px; font-size: 18px"
        >夏娜，我猜你可能累了</span
      >
      <div style="float: right; width: 300px">
        <a-row :gutter="16" style="margin-top: 18px; font-size: 15.5px">
          <a-col :span="8"> 项目 / 80</a-col>
          <a-col :span="8"> 排名 / 15</a-col>
          <a-col :span="8"> 访问 / 353</a-col>
        </a-row>
      </div>
    </a-card>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col span="18">
          <a-card title="项目">
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
            <a-card-grid
              style="
                width: 25%;
                height: 100px;
                line-height: 50px;
                text-align: center;
              "
              :hoverable="false"
            >
              Content
            </a-card-grid>
          </a-card>
          <a-card title="动态" style="margin-top: 10px">
            <a-list item-layout="horizontal" :data-source="data">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta :description="item.info">
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                      <a-avatar :src="item.avatar" />
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
        <a-col span="6">
          <a-card title="任务">
            <a-timeline>
              <a-timeline-item color="green">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
              </a-timeline-item>
              <a-timeline-item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3</p>
              </a-timeline-item>
              <a-timeline-item color="red">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3</p>
              </a-timeline-item>
              <a-timeline-item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3</p>
              </a-timeline-item>
              <a-timeline-item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3</p>
              </a-timeline-item>
            </a-timeline>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
  </div>
</template>
<script>
export default {
  setup() {
    const data = [
      {
        avatar:
          "https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200",
        title: "就眠仪式",
        info: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆。",
      },
      {
        avatar:
          "https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200",
        title: "夏娜",
        info:
          "我跟自己和解，终究是做不会冷漠绝情的人类。本质就像感性动物的我，所以注定是要心碎不止一万次的。",
      },
      {
        avatar:
          "https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200",
        title: "风筝",
        info: "生命就像一盒巧克力，结果往往出人意料。",
      },
      {
        avatar:
          "https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200",
        title: "落小梅",
        info:
          "只向你撒了一回谎。我说：“人惯是薄凉的，昨日才说衷心爱你，怕是今日，明日便是不肯再爱了”。你看，我总是这般，唯恐爱使我的心成了破洞窟窿，便要紧紧裹住自己的尾巴先做逃。枉你说爱我的胆量和真心。",
      },
    ];

    return {
      data,
    };
  },
};
</script>
<style>
.ant-list-item-meta-description {
  line-height: 28px;
}
</style>