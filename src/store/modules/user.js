import {getUserMenusArray, getUserMenusTree, login, logout} from "@/api/module/user";
import {generatorUserMenuForList, generatorUserMenuForTree} from "@/route/permission";

const state = {
  token: '',
  userInfo: localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')) : null,
  userRoutes: []
}

const mutations = {
  SET_USER_TOKEN(state, token) {
    if (token) {
      state.token = token;
      localStorage.setItem('pear_admin_ant_token', token);
    } else {
      state.token = '';
      localStorage.removeItem('pear_admin_ant_token')
    }
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('user_info', JSON.stringify(userInfo))
  },
  SET_USER_MENU(state, menuList) {
    if (menuList && menuList.length === 0) {
      state.userRoutes = []
      localStorage.removeItem('user_routes')
    } else {
      const finalMenu = menuList
      state.userRoutes = finalMenu
      localStorage.setItem('user_routes', JSON.stringify(finalMenu))
    }
  }
}

const actions = {
  setUserToken({commit}, token) {
    return new Promise(resolve => {
      commit('SET_USER_TOKEN', token);
      resolve()
    })
  },
  async logout({commit}) {
    await logout()
    commit('SET_USER_TOKEN', '')
    commit('SET_USER_MENU')
    commit('layout/closeAllTab', [], { root: true })
    return Promise.resolve()
  },
  async login({commit}, data) {
    try {
      const response = await login(data)
      const {code, message, result: userInfo} = response
      if (code === 200) {
        const {token} = userInfo
        delete userInfo.menuList
        delete userInfo.token
        commit('SET_USER_TOKEN', token)
        commit('SET_USER_INFO', userInfo)
        return Promise.resolve()
      } else {
        return Promise.reject(message)
      }
    } catch (e) {
      console.log(e)
    }
  },
  // addUserRouteForArray, addUserRouteForTree 跟据后端返回数据结构来决定走哪个方法。
  async addUserRouteForArray ({ state: { userRoutes }, commit }) {
    const { result: menuList } = await getUserMenusArray()
    const dynamicRoutes = generatorUserMenuForList(menuList)
    commit('SET_USER_MENU', dynamicRoutes)
  },
  async addUserRouteForTree ({ state: { userRoutes }, commit }) {
    const { result: menuList } = await getUserMenusTree()
    const dynamicRoutes = generatorUserMenuForTree(menuList)
    commit('SET_USER_MENU', dynamicRoutes)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}