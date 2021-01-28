<template>
  <div>
    <editor
      v-model="data"
      @input="content => (data = content)"
      :init="init"
    ></editor>
    <!-- <image-upload /> -->
  </div>
</template>
<script>
/**
 * @author zhouwei
 * @time 2020/9/10
 * @description 富文本组件
 */
//
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
// import imageUpload from "./imageUpload";
require("./imp.js");
import init from "./init";

export default {
  components: {
    Editor
    // imageUpload,
  },
  model: {
    prop: "value"
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    field: {
      type: String,
      default: ""
    },
    minHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    if (this.minHeight) {
      init.min_height = this.minHeight;
    }
    return {
      img_url: "",
      data: this.value,
      init: {
        ...init
      }
    };
  },
  watch: {
    //最后赋值给表单的数据
    data: {
      handler(val, oldValue) {
        //找到图片前缀 and去掉，
        // let data = val;
        // data = data.replace(new RegExp(this.img_url, "g"), "");
        // this.$emit("change", data);
        this.$emit("update:value", val);
      },
      deep: true
    },
    value: {
      handler(val, oldValue) {
        if (val && this.data != val) {
          this.data = val;
        }
      },
      deep: true
    }
  },
  created() {},
  async mounted() {},
  methods: {}
};
</script>
