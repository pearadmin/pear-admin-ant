import http from '../http'

const Api = {
  login: '/login',
  logout: '/logout',
  menuList: '/getUserMenusArray',
  menuTree: '/getUserMenusTree',
}

export const login = data => {
  return http.request({
    url: Api.login,
    data: data,
    method: 'post'
  })
}

export const logout = data => {
  return http.request({
    url: Api.logout,
    data: data,
    method: 'post'
  })
}

export const menuList = data => {
  return http.request({
    url: Api.menuList,
    data: data,
    method: 'post'
  })
}

export const menuTree = data => {
  return http.request({
    url: Api.menuTree,
    data: data,
    method: 'post'
  })
}
