const getters = {
	sideVisible: state => state.layout.sidebar.visible,
	sideCollapsed: state => state.layout.sidebar.opened,
	settingVisible: state => state.layout.setting.opened,
	logo: state => state.layout.logo,
	tab: state => state.layout.tab,
	routerActive: state => state.layout.routerActive,
	selectKey: state => state.layout.selectKey,
	openKey: state => state.layout.openKey,
	activeKey: state => state.layout.activeKey,
	panes: state => state.layout.panes,
	fullscreen: state => state.layout.fullscreen,
	sideWitch: state => state.layout.sideWitch,
	menuModel: state => state.layout.menuModel,
	theme: state => state.layout.theme
};
export default getters;
