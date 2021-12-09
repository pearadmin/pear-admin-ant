<template>
  <div class="icon-picker">
    <a-dropdown>
      <a-input v-model:value="selected" :name="name" readonly>
        <template #addonAfter>
          <p-icon :type="selected"></p-icon>
        </template>
      </a-input>
      <template #overlay>
        <a-menu style="height:300px;overflow-y:scroll">
          <a-menu-item :key="icon" v-for="icon in icons" @click="select(icon)">
            <p-icon :type="icon"></p-icon>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import icons from './index.js'
import { watch, ref } from 'vue';

export default {
    name: 'p-icon-picker',
    props: {
      modelValue: {
        type: String,
        require: false
      },
      name: {
        type: String,
        require: false
      }
    },
    setup(props,context) {

        const selected = ref(props.modelValue ? props.modelValue : icons[0]);

        const select = function(icon){
          selected.value = icon;
          context.emit('update:modelValue', icon)
        }

        watch(props,(props) => {
          selected.value = props.modelValue;
        })

        return {
            icons,
            select,
            selected
        }

    }
}
</script>