import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export function useMenu() {

    const route = useRoute();
    const selectedKeys = ref([]);

    watch(() => route.path, (path) => {
        selectedKeys.value = [path];
    }, { immediate: true })

    return {
        selectedKeys
    }
}