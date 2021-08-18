import {menuList, menuTree, login, logout} from "@/api/module/user";
import { createRouteByList, createRouteByTree} from "@/router/permission";

const state = {
  token: '',
  userInfo: localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')) : null,
  userRoutes: []
}

const mutations = {
  SET_USER_TOKEN(state, token) {
    if (token) {
      state.token = token;
      localStorage.setItem('PEAR_TOKEN', token);
    } else {
      state.token = '';
      localStorage.removeItem('PEAR_TOKEN')
    }
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('user_info', JSON.stringify(userInfo))
  },
  SET_USER_MENU(state, menuList) {
    if (menuList && menuList.length === 0) {
      state.userRoutes = []
      localStorage.removeItem('USER_ROUTES')
    } else {
      const finalMenu = menuList
      state.userRoutes = finalMenu
      localStorage.setItem('USER_ROUTES', JSON.stringify(finalMenu))
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
    commit('SET_USER_MENU');
    commit('SET_USER_TOKEN');
    return Promise.resolve();
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
  async addUserRouteForArray ({ state: { userRoutes }, commit }) {
    const { result: data } = await menuList()
    const dynamicRoutes = createRouteByList(data)
    commit('SET_USER_MENU', dynamicRoutes)
  },
  async addUserRouteForTree ({ state: { userRoutes }, commit }) {
    const { result: data } = await menuTree()
    const dynamicRoutes = createRouteByTree(data)
    commit('SET_USER_MENU', dynamicRoutes)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}