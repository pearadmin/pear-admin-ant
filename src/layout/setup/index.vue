<template>
	<a-drawer title="设置" placement="right" :closable="false" v-model:visible="visible" width="320" :after-visible-change="afterVisibleChange" @close="onChangeVisible()">
		<a-switch v-model:checked="logo" @change="onChangeLogo" /> ---- 图标
		<br />
		<br />
		<a-switch v-model:checked="tab" @change="onChangeTab" /> ---- 内容
		<br />
		<br />
		<a-switch v-model:checked="side" @change="onChangeSide" /> ---- 菜单
		<br />
		<br />
		<a-switch v-model:checked="theme" @change="onChangeTheme" /> ---- 主题
	</a-drawer>
</template>
<script>
	import { computed } from "vue";
	import { useStore } from "vuex";
	export default {
		setup() {
			const { getters, commit } = useStore();
			const visible = computed(() => getters.settingVisible);
			const logo = computed(() => getters.logo);
			const side = computed(() => getters.sideVisible);
			const tab = computed(() => getters.tab);
			const theme = computed(()=> getters.theme =="dark");
			return {
				visible,
				logo,
				side,
				tab,
				theme,
				onChangeVisible: () => commit("layout/TOGGLE_SETTING"),
				onChangeLogo: () => commit("layout/TOGGLE_LOGO"),
				onChangeTab: () => commit("layout/updateTab"),
				onChangeSide: () => commit("layout/TOGGLE_SIDEBAR_VISIBLE"),
				onChangeTheme: () => commit("layout/TOGGLE_THEME"),
				afterVisibleChange: () => {},
			};
		},
	};
</script>
<style>
</style>
