const state = {
  cancelToken: [] // 已发送的http请求的取消回调函数数组
}

const mutations = {
  PUSH_CANCEL_TOKEN (state, payload) {
    state.cancelToken.push(payload.cancelToken)
  },
  EXEC_CANCEL_TOKEN (state) {
    state.cancelToken.forEach(executor => {
      executor('路由跳转取消上个页面的请求')
    })
    state.cancelToken = []
  }
}

const actions = {
  execCancelToken ({commit}) {
    return new Promise(resolve => {
      commit('EXEC_CANCEL_TOKEN');
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
