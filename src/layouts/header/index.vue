<template>
	<!-- 框架顶部菜单区域 -->
	<div id="header">
		<!-- 左侧菜单功能项 -->
		<div class="prev-menu">
			<menu-unfold-outlined v-if="collapsed" class="trigger" @click="trigger()" />
			<menu-fold-outlined v-else class="trigger" @click="trigger()" />
			<ReloadOutlined class="refresh" @click="refresh()" />
		</div>
		<!-- 右侧菜单功能项 -->
		<div class="next-menu">
			<ExpandOutlined v-if="!fullscreen" class="expand" @click="full(1)" />
			<CompressOutlined v-else class="expand" @click="full(2)" />
			<SettingOutlined class="setting" @click="setting()" />
		</div>
	</div>
</template>
<script>
	import {
		computed
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	/** 图标引入 */
	import {
		MenuFoldOutlined,
		MenuUnfoldOutlined,
		SettingOutlined,
		ExpandOutlined,
		CompressOutlined,
		ReloadOutlined,
	} from "@ant-design/icons-vue";
	export default {
		components: {
			MenuFoldOutlined,
			MenuUnfoldOutlined,
			SettingOutlined,
			ExpandOutlined,
			CompressOutlined,
			ReloadOutlined,
		},
		methods: {
			full: function(num) {
				num = num || 1;
				num = num * 1;
				var docElm = document.documentElement;
				switch (num) {
					case 1:
						if (docElm.requestFullscreen) {
							docElm.requestFullscreen();
						} else if (docElm.mozRequestFullScreen) {
							docElm.mozRequestFullScreen();
						} else if (docElm.webkitRequestFullScreen) {
							docElm.webkitRequestFullScreen();
						} else if (docElm.msRequestFullscreen) {
							docElm.msRequestFullscreen();
						}
						break;
					case 2:
						if (document.exitFullscreen) {
							document.exitFullscreen();
						} else if (document.mozCancelFullScreen) {
							document.mozCancelFullScreen();
						} else if (document.webkitCancelFullScreen) {
							document.webkitCancelFullScreen();
						} else if (document.msExitFullscreen) {
							document.msExitFullscreen();
						}
						// 修改值
						break;
				}
				this.updateFullscreen();
			},
		},
		setup(props, context) {
			const { getters, commit } = useStore();
			const collapsed = computed(() => getters.sideCollapsed)
			const fullscreen = computed(() => getters.fullscreen)
			return {
				collapsed,
				fullscreen,
				trigger: () => commit("layout/TOGGLE_SIDEBAR"),
				setting: () => commit("layout/TOGGLE_SETTING"),
				refresh: () => {
					commit("updateRouterActive");
					// context.$nextTick(function() {
					// 	commit("updateRouterActive");
					// })
					context.$message.info("刷新成功");
				},
				updateFullscreen: () => commit("layout/updateFullscreen"),
			}

		}
	};
</script>
<style scoped>
	#header {
		background-color: white;
	}

	#header .expand,
	#header .refresh,
	#header .trigger,
	#header .setting {
		font-size: 17px;
		line-height: 64px;
		padding: 0 15px;
		cursor: pointer;
		transition: color 0.3s;
	}

	#header .expand:hover,
	#header .setting:hover,
	#header .refresh:hover,
	#header .trigger:hover {
		color: #1890ff;
	}

	#header .next-menu {
		float: right;
	}

	#header .prev-menu {
		display: inline-block;
	}
</style>
