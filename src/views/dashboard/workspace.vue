<template>
  <div id="workspace">
    <a-card> </a-card>
    <a-row :gutter="[15, 15]" style="margin: 10px">
      <a-col :span="18">
        <a-card title="我的项目">
          <a-card-grid style="width: 25%; text-align: center">
          </a-card-grid>
          <a-card-grid
            style="width: 25%; text-align: center"
            :hoverable="false"
          >
            Content
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            Content
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            Content
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            Content
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            Content
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            Content
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            Content
          </a-card-grid>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card> </a-card>
      </a-col>
    </a-row>
  </div>
</template>