<template>
  <div id="workspace">
    <a-card> </a-card>
    <a-row :gutter="[15, 15]" style="margin: 10px">
      <a-col :span="17">
        <a-card title="我的项目">
          <a-card-grid
            style="
              width: 32.5%;
              text-align: center;
              background-image: url('https://dev-file.iviewui.com/p50TGdvvpXWVR06Vu2TAwkpRnpt8FURA/middle');
              background-size: cover;
              height: 100px;
              margin: 3px;
              border-radius: 4px;
            "
          >
            Pear Admin Ant
          </a-card-grid>
          <a-card-grid
            style="
              width: 32.5%;
              text-align: center;
              background-image: url('https://dev-file.iviewui.com/p50TGdvvpXWVR06Vu2TAwkpRnpt8FURA/middle');
              background-size: cover;
              height: 100px;
              margin: 3px;
              border-radius: 4px;
            "
          >
            Pear Admin Ant
          </a-card-grid>
          <a-card-grid
            style="
              width: 32.5%;
              text-align: center;
              background-image: url('https://dev-file.iviewui.com/p50TGdvvpXWVR06Vu2TAwkpRnpt8FURA/middle');
              background-size: cover;
              height: 100px;
              margin: 3px;
              border-radius: 4px;
            "
          >
            Pear Admin Ant
          </a-card-grid>
          <a-card-grid
            style="
              width: 32.5%;
              text-align: center;
              background-image: url('https://dev-file.iviewui.com/p50TGdvvpXWVR06Vu2TAwkpRnpt8FURA/middle');
              background-size: cover;
              height: 100px;
              margin: 3px;
              border-radius: 4px;
            "
          >
            Pear Admin Ant
          </a-card-grid>
          <a-card-grid
            style="
              width: 32.5%;
              text-align: center;
              background-image: url('https://dev-file.iviewui.com/p50TGdvvpXWVR06Vu2TAwkpRnpt8FURA/middle');
              background-size: cover;
              height: 100px;
              margin: 3px;
              border-radius: 4px;
            "
          >
            Pear Admin Ant
          </a-card-grid>
          <a-card-grid
            style="
              width: 32.5%;
              text-align: center;
              background-image: url('https://dev-file.iviewui.com/p50TGdvvpXWVR06Vu2TAwkpRnpt8FURA/middle');
              background-size: cover;
              height: 100px;
              margin: 3px;
              border-radius: 4px;
            "
          >
            Pear Admin Ant
          </a-card-grid>
        </a-card>
        <a-card title="动态" style="margin-top: 15px">
          <a-list item-layout="horizontal" :data-source="data">
            <template v-slot:renderItem="{ item}">
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
      <a-col :span="7">
        <a-card title="快捷操作"> </a-card>
        <a-card title="代办事项" style="margin-top: 15px"></a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
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
  data() {
    return {
      data,
    };
  },
};
</script>