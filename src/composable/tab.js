import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useTab() {

    const route = useRoute();
    const router = useRouter();
    const active = ref();
    const list = ref([]);

    watch(()=> route.path, (path) => {
        const title = route.meta.title;
        add({ title, path })
    }, { immediate : true })

    function add(tab) {
        !list.value.find((item)=> item.path === tab.path) && list.value.push(tab);
        active.value = tab.path;
    }

    function to(path) {
        if(route.path !== path) {
            router.push(path);
        }
    }

    function close(path) {
        const index = list.value.findIndex((item) => item.path == path);
        list.value = list.value.filter((item) => item.path !== path);
        if(route.path === path && list.value.length) {
            if(index >= 1) {
                to({ path: list.value[index - 1].path })
            } else {
                to({ path: list.value[index].path })
            }
        }
    }

    function closeCurrent () {
        const currentPath = route.path;
        close(currentPath);
    }

    function closeOther () {
        const title = route.meta.title;
        list.value = [{ title , path: active.value }]
    }

    return {
        active,
        list,
        add,
        to,
        close,
        closeOther,
        closeCurrent,
    }

}