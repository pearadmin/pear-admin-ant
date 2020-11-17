<template>
  <div>
    <page-header
      title="分步表单"
      describe="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成."
    ></page-header>
    <page-layout>
      <a-card>
        <a-steps :current="current">
          <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
          {{ steps[current].content }}
        </div>
        <div class="steps-action">
          <a-button
            v-if="current < steps.length - 1"
            type="primary"
            @click="next"
          >
            下一步
          </a-button>
          <a-button
            v-if="current == steps.length - 1"
            type="primary"
            @click="$message.success('Processing complete!')"
          >
            完成
          </a-button>
          <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
            上一步
          </a-button>
        </div>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "第一步",
          content: "First-content",
        },
        {
          title: "第二步",
          content: "Second-content",
        },
        {
          title: "第三步",
          content: "Last-content",
        },
      ],
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
};
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
