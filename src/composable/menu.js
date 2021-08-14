import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { findParent, findParentAll } from '@/tools/common';

export function useMenu() {

    const { getters } = useStore();
    const route = useRoute();
    const selectedKeys = ref([]);
    const menu = computed(() => getters.menu);
    const openKeys = ref([]);
    const lastOpenKeys = ref([]);

    watch(() => route.path, (path) => {
        selectedKeys.value = [path];
        let result = findParent(menu.value, path);
        openKeys.value = result;
        lastOpenKeys.value = result;
    }, { immediate: true })

    function openChange(keys) {
        const lastPath = keys.find(key => lastOpenKeys.value.indexOf(key) === -1);
        let result = findParentAll(menu.value, lastPath);
        openKeys.value = result;
        lastOpenKeys.value = result;
    }

    return {
        selectedKeys, openKeys, openChange
    }
}