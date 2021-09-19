<template>
  <div class="icon-picker">
    <a-dropdown>
      <a-input v-model:value="selected" readonly>
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
import { ref } from '@vue/reactivity';
import icons from './index.js'
import { watch } from '@vue/runtime-core';

export default {
    name: 'p-icon-picker',
    props: {
      value: {
        type: String,
        require: false
      }
    },
    setup(props,context) {

        const selected = ref(props.value?props.value:icons[0]);

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