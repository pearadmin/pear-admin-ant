/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import http from '../http'

const Api = {
  login: '/login',
  logout: '/logout',
  getUserMenusArray: '/getUserMenusArray',
  getUserMenusTree: '/getUserMenusTree',
}

export const login = data => {
  return http.request({
    url: Api.login,
    data,
    method: 'post'
  })
}

export const logout = data => {
  return http.request({
    url: Api.logout,
    data,
    method: 'post'
  })
}

export const getUserMenusArray = data => {
  return http.request({
    url: Api.getUserMenusArray,
    data,
    method: 'post'
  })
}

export const getUserMenusTree = data => {
  return http.request({
    url: Api.getUserMenusTree,
    data,
    method: 'post'
  })
}
