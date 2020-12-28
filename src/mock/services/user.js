import {generatorResponse, generatorToken, getRequestBody} from "@/mock/util";
import Mock from "mockjs2";
import menuList from './menuList.json'
import menuTree from './menuTree.json'

let isAdmin = false

const login = request => {
  const { username, password } = getRequestBody(request)
  const admin = {
    username: 'admin',
    password: 'admin'
  }
  isAdmin = (username === admin.username && password === admin.password)
  const userInfo = {
    'id': Math.random().toString(36).slice(2),
    'username': username,
    'password': password,
    'token': generatorToken(),
    'avatar': 'https://portrait.gitee.com/uploads/avatars/user/1611/4835367_Jmysy_1578975358.png',
    'menuList': menuList
  }
  return generatorResponse(userInfo)
}

const getUserMenusArray = request => {
  const filters = ['form']
  const menus = isAdmin ? menuList : menuList.filter(m => (!filters.includes(m.name) && !filters.includes(m.parent)))
  return generatorResponse(menus)
}

const getUserMenusTree = request => {
  const filters = ['list', 'form']
  const menus = isAdmin ? menuTree : menuTree.filter(m => !filters.includes(m.name))
  return generatorResponse(menus)
}

const logout = request => {
  return generatorResponse({
    status: 0
  })
}

Mock.mock(/\/api\/login/, 'post', login)
Mock.mock(/\/api\/logout/, 'post', logout)
Mock.mock(/\/api\/getUserMenusArray/, 'post', getUserMenusArray)
Mock.mock(/\/api\/getUserMenusTree/, 'post', getUserMenusTree)
