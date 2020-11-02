const state = {
	/**
	 * 布局方式（整体界面的排版方式）
	 * headMenu -- 头部菜单
	 * sideMenu -- 顶部菜单
	 * */
	layout: "sideMenu",

	/**
	 * 系统主题（整体色调）
	 * light -- 白色主题
	 * dark -- 暗色主题
	 */
	theme: "dark",

	/**
	 * 侧边状态
	 * true  --  隐藏
	 * false --  展开
	 * */
	collapsed: false,

	// 设置面板
	setting: {
		//显示状态
		opened: false,
	},
	// 是否显示图标
	logo: true,
	// 是否显示选项卡
	tab: true,
	// 选项卡内容存储
	panes: [],
	// 当前激活选项卡
	activeKey: '',
	// 当前打开菜单
	openKey: [],
	// 手风琴配置
	muiltOpen: true,
	// 路由刷新辅助变量
	routerActive: true,
	// 浏览器全屏
	fullscreen: false,
	// 宽度
	sideWitch: 250,

	// 国 际 化 语 言 配 置
	language: '',
	languages: [],
	rootSubmenuKeys: ['sub1', 'sub2', 'sub4']
}

const mutations = {
	// 修改当前的左侧菜单显示状态
	TOGGLE_SIDEBAR_VISIBLE(state) {
		state.sidebar.visible = !state.sidebar.visible;
	},
	// 修改当前的左侧菜单缩进状态
	TOGGLE_SIDEBAR(state) {
		if (state.collapsed) {
			// 要展开
			state.openKey = JSON.parse(localStorage.getItem("openKeys"));
		} else {
			// 要隐藏
			localStorage.setItem("openKeys", JSON.stringify(state.openKey));
			state.openKey = [];
		}
		state.collapsed = !state.collapsed;
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
		state.theme = state.theme === 'dark' ? 'light' : 'dark'
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
	updateOpenKey(state, { openKeys, isNew = false }) {
		//   //手风琴模式, 只保留当前打开的节点, TODO: 多级需要判断父节点的数据
		let { openKey } = state;
		if (state.muiltOpen) {
			openKey = [openKeys[openKeys.length-1]];
		} else {
			if (isNew) {
				openKeys.forEach(newOpenKey => {
					//当前打开的节点不在其中
					if (openKey.findIndex(key => key === newOpenKey) == -1) {
						openKey.push(newOpenKey);
					}
				})
			} else {
				openKey = openKeys;
			}
		}
		state.openKey = openKey;
	},
	// 新增选项卡操作
	addTab(state, value) {
		// 遍历当前的选项卡中是否已存在新增的 Key
		if (state.panes.findIndex(pane => pane.path === value.path) === -1) {
			// 如果不存在新增选项卡
			state.panes.push(value)
		}
		// 选中新增 或 已存在的选项卡
		state.activeKey = value.path;
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
	},
	closeAllTab(state) {
		// 处理之前
		const panes = state.panes.filter((pane) => pane.closable === false);
		// 设置重新选中获取当前数组中的最后一个
		const length = panes.length;
		const key = panes[length - 1].key;
		state.panes = panes;
		state.activeKey = key;
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
	},
	initPanes(state, panes) {
		state.panes = panes;
	},
	selectTab(state, key) {
		state.activeKey = key;
	},
	updateRouterActive(state) {
		state.routerActive = !state.routerActive;
	},
	setLanguage(state, language) {
		state.language = language
	},
	setLanguages(state, languages) {
		state.languages = languages
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
