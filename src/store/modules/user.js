const state = {
    token: ''
}

const mutations = {
    SET_USER_TOKEN(state, token) {
        if (token) {
            state.token = token;
        } else {
            state.token = ''
        }
    },
}

const actions = {
    setUserToken({ commit }, token) {
        return new Promise(resolve => {
            commit('SET_USER_TOKEN', token);
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
