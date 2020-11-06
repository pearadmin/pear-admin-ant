<template>
  <a-drawer
    placement="right"
    :closable="false"
    :visible="visible"
    width="370"
    :after-visible-change="afterVisibleChange"
    @close="onChangeVisible()"
  >
    <div>
      <div class="pearone-color">
        <div class="color-title">整体风格</div>
        <div class="color-content">
          <ul>
            <li
              @click="updateTheme('theme-dark')"
              :class="[theme === 'theme-dark' ? 'layui-this' : '']"
            >
              <a
                href="javascript:;"
                data-skin="skin-blue"
                style=""
                class="clearfix full-opacity-hover"
                ><div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 12px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 12px;
                      background: white;
                    "
                  ></span>
                </div>
                <div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 34px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 34px;
                      background: #f4f5f7;
                    "
                  ></span></div
              ></a>
            </li>
            <li
              @click="updateTheme('theme-light')"
              :class="[theme === 'theme-light' ? 'layui-this' : '']"
            >
              <a href="javascript:;" class="clearfix full-opacity-hover"
                ><div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 12px;
                      background: white;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 12px;
                      background: white;
                    "
                  ></span>
                </div>
                <div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 34px;
                      background: white;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 34px;
                      background: #f4f5f7;
                    "
                  ></span></div
              ></a>
            </li>
             <li
              @click="updateTheme('theme-night')"
              :class="[theme === 'theme-night' ? 'layui-this' : '']"
            >
              <a
                href="javascript:;"
                data-skin="skin-blue"
                style=""
                class="clearfix full-opacity-hover"
                ><div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 12px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 12px;
                      background: #28333e;
                    "
                  ></span>
                </div>
                <div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 34px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 34px;
                      background: #28333e;
                    "
                  ></span></div
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="pearone-color">
        <div class="color-title">布局方式</div>
        <div class="color-content">
          <ul>
            <li
              @click="updateLayout('layout-side')"
              :class="[layout === 'layout-side' ? 'layui-this' : '']"
            >
              <a
                href="javascript:;"
                data-skin="skin-blue"
                style=""
                class="clearfix full-opacity-hover"
                ><div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 12px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 12px;
                      background: white;
                    "
                  ></span>
                </div>
                <div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 34px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 34px;
                      background: #f4f5f7;
                    "
                  ></span></div
              ></a>
            </li>
            <li
              @click="updateLayout('layout-head')"
              :class="[layout === 'layout-head' ? 'layui-this' : '']"
            >
              <a
                href="javascript:;"
                data-skin="skin-blue"
                style=""
                class="clearfix full-opacity-hover"
                ><div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 12px;
                      background: white;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 12px;
                      background: white;
                    "
                  ></span>
                </div>
                <div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 34px;
                      background: white;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 34px;
                      background: #f4f5f7;
                    "
                  ></span></div
              ></a>
            </li>
            <li
              @click="updateLayout('layout-comp')"
              :class="[layout === 'layout-comp' ? 'layui-this' : '']"
            >
              <a
                href="javascript:;"
                data-skin="skin-blue"
                style=""
                class="clearfix full-opacity-hover"
                ><div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 12px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 12px;
                      background: #28333e;
                    "
                  ></span>
                </div>
                <div>
                  <span
                    style="
                      display: block;
                      width: 20%;
                      float: left;
                      height: 34px;
                      background: #28333e;
                    "
                  ></span
                  ><span
                    style="
                      display: block;
                      width: 80%;
                      float: left;
                      height: 34px;
                      background: #f4f5f7;
                    "
                  ></span></div
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="select-color">
        <div class="select-color-title">主题配色</div>
        <div class="select-color-content">
          <span
            class="select-color-item"
            @click="updateColor('#ff5722')"
            style="background-color: #ff5722"
          ></span
          ><span
            class="select-color-item layui-icon layui-icon-ok"
            @click="updateColor('#5fb878')"
            style="background-color: #5fb878"
          ></span
          ><span
            class="select-color-item"
            @click="updateColor('#1e9fff')"
            style="background-color: #1e9fff"
          ></span
          ><span
            class="select-color-item"
            @click="updateColor('#ffb800')"
            style="background-color: #ffb800"
          ></span
          ><span
            class="select-color-item"
            @click="updateColor('darkgray')"
            style="background-color: darkgray"
          ></span>
        </div>
      </div>
      <br />
      <div class="pearone-color">
        <div class="color-title">更多设置</div>
        <div class="color-content">
          <br />
          <a-switch v-model:checked="logo" @change="onChangeLogo" /> ---- 侧边图标
          <br />
          <br />
          <a-switch v-model:checked="tab" @change="onChangeTab" /> ---- 多选项卡
          <br />
          <br />
          <a-switch
            v-model:checked="fixedHeader"
            @change="onChangeFixedHeader"
          />
          ---- 固定头部
          <br />
          <br />
          <a-switch v-model:checked="fixedSide" @change="onChangeFixedSide" />
          ---- 固定侧边
          <br />
          <br />
          <a-radio-group
        :options="lans"
        v-model:value="lan"
        @change="changeLanguage"
      />
      <br />
      <br />
      <a-button type="primary"> 复制配置 </a-button>
      &nbsp;&nbsp;
      <a-button>重置配置</a-button>
        </div>
      </div>
    </div>
    <br />
    <br />
  </a-drawer>
</template>
<script>
import { message } from "ant-design-vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { getters, commit } = useStore();
    const visible = computed(() => getters.settingVisible);
    const logo = computed(() => getters.logo);
    const tab = computed(() => getters.tab);
    const theme = computed(() => getters.theme);
    const lan = ref(getters.language);
    const lans = computed(() =>
      getters.languages.map((lan) => ({ label: lan, value: lan }))
    );
    const fixedSide = computed(() => getters.fixedSide);
    const fixedHeader = computed(() => getters.fixedHeader);
    const layout = computed(() => getters.layout);

    // 新代码
    const updateLayout = function (layout) {
      commit("layout/UPDATE_LAYOUT", layout);
    };
    const updateTheme = function (theme) {
      commit("layout/UPDATE_THEME", theme);
    };

    const updateColor = function (color) {
      message.info("选中颜色 ：" + color);
    };

    return {
      // 新代码
      updateLayout,
      updateTheme,
      updateColor,

      fixedSide,
      fixedHeader,
      visible,
      logo,
      tab,
      layout,
      theme,
      lan,
      lans,
      onChangeVisible: () => commit("layout/TOGGLE_SETTING"),
      onChangeLogo: () => commit("layout/TOGGLE_LOGO"),
      onChangeTab: () => commit("layout/updateTab"),
      onChangeSide: () => commit("layout/TOGGLE_SIDEBAR_VISIBLE"),
      onChangeTheme: () => commit("layout/TOGGLE_THEME"),
      onChangeFixedSide: () => commit("layout/TOGGLE_FIXEDSIDE"),
      onChangeFixedHeader: () => commit("layout/TOGGLE_FIXEDHEADER"),
      onChangeLayout: () => commit("layout/TOGGLE_LAYOUT"),
      afterVisibleChange: () => {},
      changeLanguage: (e) => {
        commit("layout/setLanguage", e.target.value);
      },
    };
  },
};
</script>