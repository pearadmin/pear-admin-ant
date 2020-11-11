/**
 * project default configuration
 * 
 * 项目默认配置信息
 * 
 * store 初始化时决定使用 localstore 本地 / pear.config.js 默认配置
 */
export default {

    /**
     * 参数 : 默认使用的布局
     * layout-side
     * layout-head
     * layout-comp
     * */
    layout:"layout-side",

    /**
     * 参数 : 默认的主题
     * theme-dark
     * theme-light
     * theme-night
     * */
    theme:"theme-dark",

    /**
     * 参数 : 当前菜单的状态
     * true
     * false
     * */
    collapsed: false,

    /**
     * 参数：是否显示菜单头
     * true
     * false
     */
    logo: true,

    /**
     * 参数: 是否开启多标签页
     * true
     * false
     * */
    tab: true,

    /**
     * 参数: 侧边菜单栏宽度
     * 单位: px
     * */
    sideWidth: 250,

    /**
     * 参数: 是否固定侧边
     * true
     * false
     * */
    fixedSide: true,

    /**
     * 参数: 是否固定顶部
     * true
     * false
     */
    fixedHeader: true,

    /**
     * 参数: 主题颜色
     * theme-blue
     * theme-green
     */
    color: "theme-green"

}
  