import Mock from "mockjs2"
import {generatorResponse, generatorToken, getRequestBody, getRolePermission} from "@/mock/tool";
import menuList from './service/menuList.json'
import menuTree from './service/menuTree.json'

const useMock = true

if (useMock) {
  
  /**
   * 登录接口 
   */
  const login = request => {
    const { username, password } = getRequestBody(request)
    const admin = {
      username: 'admin',
      password: 'admin'
    }
    if ((username === admin.username && password === admin.password) || username !== admin.username) {
      localStorage.setItem('user_role', username)
      const userInfo = {
        'id': Math.random().toString(36).slice(2),
        'username': username,
        'password': password,
        'token': generatorToken(),
        'avatar': 'https://portrait.gitee.com/uploads/avatars/user/1611/4835367_Jmysy_1578975358.png',
        'permissions': getRolePermission(username === admin.username)
      }
      return generatorResponse(userInfo)
    } else {
      return generatorResponse(null, '账号或密码错误', 500)
    }
  }
  
  /**
   * 菜单接口
   */
  const getUserMenusArray = request => {
    const filters = ['form']
    const userName = localStorage.getItem('user_role')
    const menus = userName === 'admin' ? menuList : menuList.filter(m => (!filters.includes(m.name) && !filters.includes(m.parent)))
    return generatorResponse(menus)
  }
  
  /**
   * 菜单接口 
   */
  const getUserMenusTree = request => {
    const filters = ['list', 'form']
    const userName = localStorage.getItem('user_role')
    const menus = userName === 'admin' ? menuTree : menuTree.filter(m => !filters.includes(m.name))
    return generatorResponse(menus)
  }
  
  /**
   * 注销接口 
   */
  const logout = request => {
    return generatorResponse({
      status: 0
    })
  }
  
  Mock.mock(/\/api\/login/, 'post', login)
  Mock.mock(/\/api\/logout/, 'post', logout)
  Mock.mock(/\/api\/getUserMenusArray/, 'post', getUserMenusArray)
  Mock.mock(/\/api\/getUserMenusTree/, 'post', getUserMenusTree)

  Mock.setup({
    timeout: 1000
  })
}

