const getters = {
	layout: state => state.layout.layout,
	theme: state => state.layout.theme,
	color: state => state.layout.color,
	collapsed: state => state.layout.collapsed,
	settingVisible: state => state.layout.setting.opened,
	logo: state => state.layout.logo,
	tab: state => state.layout.tab,
	routerActive: state => state.layout.routerActive,
	openKey: state => state.layout.openKey,
	activeKey: state => state.layout.activeKey,
	panes: state => state.layout.panes,
	fullscreen: state => state.layout.fullscreen,
	sideWitch: state => state.layout.sideWitch,
	fixedHeader: state => state.layout.fixedHeader,
	fixedSide: state => state.layout.fixedSide,
	routes: state => state.layout.routes,
	colorList: state => state.layout.colorList
};
export default getters;
