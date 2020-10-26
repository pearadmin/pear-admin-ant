import { createStore } from 'vuex'

export default createStore({
    state: {
        collapsed: false,
        visible: false,
        logo: true,
        side: true,
        tab: true,
        panes: [
            { title: "首页", key: "1", path: "/home", closable: false }
        ],
        activeKey: "1",
        selectKey: ["1"],
        openKey: ['1'],
        muiltOpen: false,
        routerActive: true,
        fullscreen: false
    },
    mutations: {
        // 修改当前的左侧菜单缩进状态
        updateCollasped(state) {
            state.collapsed = !state.collapsed;
        },
        // 设置面板是否打开
        updateVisible(state) {
            state.visible = !state.visible;
        },
        // 是否显示LOGO
        updateLogo(state) {
            state.logo = !state.logo;
        },
        // 是否开启选项卡模式
        updateTab(state) {
            state.tab = !state.tab;
        },
        updateFullscreen(state){
            state.fullscreen = !state.fullscreen;
        },
        // 修改菜单模式
        updateSide(state) {
            state.side = !state.side;
        },
        updateOpenKey(state,openKey){
            if(!state.muiltOpen){
                state.openKey[0] = openKey[1];
            }else{
                state.openKey = openKey;
            }
        },
        // 新增选项卡操作
        addTab(state, value) {
            // 新增标识, 用于判断当前的选项卡是否已经添加
            var flag = false;

            // 遍历当前的选项卡中是否已存在新增的 Key
            state.panes.forEach((pane) => {
                if (pane.key === value.key) {
                    flag = true;
                }
            })
            // 如果不存在新增选项卡
            if (!flag) {
                state.panes.push(value);
            }
            // 选中新增 或 已存在的选项卡
            state.activeKey = value.key;
        },
        // 删除选项卡实现
        removeTab(state, targetKey) {

            // 获取当前选中的选项卡
            let activeKey = state.activeKey;
            let lastIndex;

            // 获取当前删除的索引
            state.panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1;
                }
            });

            // 过滤删除后的数组
            const panes = state.panes.filter((pane) => pane.key !== targetKey);

            // 如果存在长度,并且删除的是当前选中的数组
            if (panes.length && activeKey === targetKey) {

                if (lastIndex >= 0) {
                    activeKey = panes[lastIndex].key;
                } else {

                    activeKey = panes[0].key;
                }
            }
            state.panes = panes;
            state.activeKey = activeKey;
            state.selectKey[0] = activeKey;
        },
        closeAllTab(state) {
            state.panes;
        },
        closeOtherTab(state) {
            state.panes;
        },
        closeCurrentTab(state) {   
            state.panes;
        },
        selectTab(state, key) {
            state.activeKey = key;
        },
        selectKey(state, key) {
            state.selectKey[0] = key;
        },
        updateRouterActive(state){
            state.routerActive = !state.routerActive;
        }
    }
})