<template>
	<a-drawer title="设置" placement="right" :closable="false" v-model:visible="visible" width="420" :after-visible-change="afterVisibleChange" @close="onChangeVisible()">
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
    <br />
    <br />
    <a-radio-group :options="lans" v-model:value="lan" @change="changeLanguage" /> ---- 国际化
    <br />
    <br />
    <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <a-calendar :fullscreen="false" />
    </div>
	</a-drawer>
</template>
<script>
	import { computed, ref } from "vue";
	import { useStore } from "vuex";
	export default {
		setup() {
			const { getters, commit } = useStore();
			const visible = computed(() => getters.settingVisible);
			const logo = computed(() => getters.logo);
			const side = computed(() => getters.sideVisible);
			const tab = computed(() => getters.tab);
			const theme = computed(() => getters.theme =="dark");
			const lan = ref(getters.language);
			const lans = computed(() => getters.languages.map(lan => ({ label: lan, value: lan })));
			return {
				visible,
				logo,
				side,
				tab,
				theme,
        lan,
        lans,
				onChangeVisible: () => commit("layout/TOGGLE_SETTING"),
				onChangeLogo: () => commit("layout/TOGGLE_LOGO"),
				onChangeTab: () => commit("layout/updateTab"),
				onChangeSide: () => commit("layout/TOGGLE_SIDEBAR_VISIBLE"),
				onChangeTheme: () => commit("layout/TOGGLE_THEME"),
				afterVisibleChange: () => {},
				changeLanguage: (e) => {
          commit('layout/setLanguage', e.target.value)
        },
			};
		},
	};
</script>
<style>
</style>
