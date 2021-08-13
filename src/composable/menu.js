import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { findParent } from '@/tools/common';

export function useMenu() {

    const { getters } = useStore();
    const route = useRoute();
    const selectedKeys = ref([]);
    const menu = computed(() => getters.menu);
    const openKeys = ref([]);

    watch(() => route.path, (path) => {
        selectedKeys.value = [path];
        openKeys.value = findParent(menu.value, path);
        
        console.log("打开菜单:" + JSON.stringify(openKeys.value));
    }, { immediate: true })

    return {
        selectedKeys, openKeys
    }
}