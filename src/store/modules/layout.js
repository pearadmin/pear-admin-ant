const state = {
	/**
	 * 布局方式（整体界面的排版方式）
	 * headMenu -- 头部菜单
	 * sideMenu -- 顶部菜单
	 * */
	layout: "layout-head",

	/**
	 * 系统主题（整体色调）
	 * light -- 白色主题
	 * dark -- 暗色主题
	 */
	theme: "theme-dark",

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

	routes:[],

	// 国 际 化 语 言 配 置
	language: '',
	languages: [],
	rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],

	fixedHeader: true,
	fixedSide: true,
	activeMenu: 2,
	basePath: ''
}

const mutations = {
	// 修改当前的左侧菜单显示状态
	TOGGLE_SIDEBAR_VISIBLE(state) {
		state.sidebar.visible = !state.sidebar.visible;
	},
	// 固定侧边
	TOGGLE_FIXEDSIDE(state) {
		state.fixedSide = !state.fixedSide;
	},
	TOGGLE_FIXEDHEADER(state) {
		state.fixedHeader = !state.fixedHeader;
	},
	UPDATE_LAYOUT(state,layout) {
		state.layout = layout;
	},
	UPDATE_THEME(state,theme) {
		state.theme = theme;
	},
	UPDATE_ROUTES(state,routes){
		state.routes = routes;
	},
	UPDATE_ACTIVE_MENU(state,index){
		state.activeMenu = index;
	},
	UPDATE_BASE_PATH(state,path){
		state.basePath = path;
	},
	// 修改当前的左侧菜单缩进状态
	TOGGLE_SIDEBAR(state) {
		if (state.collapsed) {
			// 要展开
			state.sideWitch = 250;
			state.openKey = JSON.parse(localStorage.getItem("openKeys"));
		} else {
			// 要隐藏
			state.sideWitch = 80;
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
		state.theme = state.theme === 'theme-dark' ? 'theme-light' : 'theme-dark'
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
	updateOpenKey(state, { openKeys }) {
		//手风琴模式, 只保留当前打开的节点
		let length = openKeys.length;
		if (length > 0 && state.muiltOpen) {
			//除了最后打开的节点, 其他的节点可能包含父节点
			let otherKeys = openKeys.slice(0, length - 1);
			//最后一次打开的节点
			let lastKey = openKeys[length - 1];
			state.openKey = [...otherKeys.filter(ok => lastKey.startsWith(ok)), lastKey];
		} else {
			state.openKey = openKeys;
		}
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
		//当前激活的选项卡, 选项卡列表
		let { activeKey, panes } = state;

		//从选项卡列表移除当前选项卡
		let index = panes.findIndex(pane => pane.path === targetKey);
		panes.splice(index, 1);
		state.panes = panes;

		//更换已经选中的菜单
		if (activeKey === targetKey) {
			let lastPane = panes[panes.length - 1];
			state.activeKey = lastPane ? lastPane.path : '';
		}
	},
	//keepKeys, 需要保留的keys
	closeAllTab(state, keepKeys = []) {
		//当前激活的选项卡, 选项卡列表
		let { activeKey, panes } = state;

		//保留不能关闭的选项卡
		panes = panes.filter((pane) => pane.closable === false || keepKeys.includes(pane.path))
		state.panes = panes;

		//检查当前选中的是否被关闭
		if (panes.findIndex(pane => pane.path === activeKey) === -1) {
			let lastPane = panes[panes.length - 1];
			state.activeKey = lastPane ? lastPane.path : '';
		}
	},
	closeOtherTab(state) {
		mutations.closeAllTab(state, [state.activeKey]);
	},
	closeCurrentTab(state) {
		mutations.removeTab(state, state.activeKey);
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
