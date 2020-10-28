const defaultHomeKey = 'home';

const state = {
	//左侧菜单
	sidebar: {
		//显示状态
		visible: true,
		//收缩状态
		opened: !JSON.parse(localStorage.getItem("sidebarStatus")),
	},
	//设置面板
	setting: {
		//显示状态
		opened: false,
	},
	// 是否显示图标
	logo: true,
	// 是否显示选项卡
	tab: true,
	// 选项卡内容存储
	panes: [
		{ title: "首页", key: defaultHomeKey, path: "/home", closable: false }
	],
	// 当前激活选项卡
	activeKey: defaultHomeKey,
	// 当前选中菜单
	selectKey: [defaultHomeKey],
	// 当前打开菜单
	openKey: [defaultHomeKey],
	// 手风琴配置
	muiltOpen: false,
	// 路由刷新辅助变量
	routerActive: true,
	// 浏览器全屏
	fullscreen: false,
	// 宽度
	sideWitch: 250,
	// 菜单模式
	menuModel: 'inline',
	//
	theme: 'dark'
}

const mutations = {
	// 修改当前的左侧菜单显示状态
	TOGGLE_SIDEBAR_VISIBLE(state) {
		state.sidebar.visible = !state.sidebar.visible;
	},
	// 修改当前的左侧菜单缩进状态
	TOGGLE_SIDEBAR(state) {
		localStorage.setItem('sidebarStatus', state.sidebar.opened)
		state.sidebar.opened = !state.sidebar.opened;
	},
	// 设置面板是否打开
	TOGGLE_SETTING(state) {
		state.setting.opened = !state.setting.opened;
	},
	// 是否显示LOGO
	TOGGLE_LOGO(state) {
		state.logo = !state.logo;
	},
	// 切换主题
	TOGGLE_THEME(state) {
		if(state.theme=="dark"){
			state.theme = "light";
		}else{
			state.theme ="dark";
		}
	},
	// 是否开启选项卡模式
	updateTab(state) {
		state.tab = !state.tab;
	},
	// 修改全屏打开
	updateFullscreen(state) {
		state.fullscreen = !state.fullscreen;
	},
	// 修改菜单打开项
	updateOpenKey(state, openKey) {
		if (!state.muiltOpen) {
			state.openKey[0] = openKey[1];
		} else {
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
		// 处理之前
		const panes = state.panes.filter((pane) => pane.closable === false);
		// 设置重新选中获取当前数组中的最后一个
		const length = panes.length;
		const key = panes[length - 1].key;
		state.panes = panes;
		state.activeKey = key;
		state.selectKey[0] = key;
	},
	closeOtherTab(state) {
		const panes = state.panes.filter((pane) => pane.closable === false || pane.key === state.activeKey);
		// 设置重新选中获取当前数组中的最后一个
		state.panes = panes;
	},
	closeCurrentTab(state) {
		const panes = state.panes.filter((pane) => pane.key !== state.activeKey);
		// 设置重新选中获取当前数组中的最后一个
		const length = panes.length;
		const key = panes[length - 1].key;
		state.panes = panes;
		state.activeKey = key;
		state.selectKey[0] = key;
	},
	selectTab(state, key) {
		state.activeKey = key;
	},
	selectKey(state, key) {
		state.selectKey[0] = key;
	},
	updateRouterActive(state) {
		state.routerActive = !state.routerActive;
	}
}

const actions = {
	ToggleSideBarVisible: ({ commit }) => {
		commit("TOGGLE_SIDEBAR_VISIBLE");
	},
	ToggleSideBar: ({ commit }) => {
		commit("TOGGLE_SIDEBAR");
	},
	ToggleSetting: ({ commit }) => {
		commit("TOGGLE_SETTING");
	},
	ToggleLogo: ({ commit }) => {
		commit("TOGGLE_LOGO");
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
