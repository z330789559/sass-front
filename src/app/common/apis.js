/**
 * 定义需要的 api
 */

import mockSource from './mock'

export const apis = {
  selfLogin: {
    url: 'POST rtapi/user/login',
    actionDesc: '登录系统',
  },
  selfRegister: {
    url: 'POST rtapi/user/demo_register',
    actionDesc: '测试用户注册',
  },
  selfLogout: {
    url: 'POST rtapi/user/logout',
    actionDesc: '退出登录',
  },
  getSelfInfo: {
    url: 'GET rtapi/user/info',
    actionDesc: '获取个人信息',
    expired: 1000,
    mockSource,
  },
  editSelfInfo: {
    url: 'PUT rtapi/user/info',
    actionDesc: '编辑个人信息',
    mockSource,
  },
  changeSelfPwd: {
    url: 'PUT rtapi/user/password',
    actionDesc: '修改个人密码',
    mockSource,
  },
  uploadImg: {
    url: 'POST rtapi/file/image',
    actionDesc: '上传图片',
  },
  pageStat: {
    url: 'POST rtapi/stat/data',
    actionDesc: '页面数据统计',
    mockSource,
  },
  sysRoleId: {
    url: 'GET rtapi/system/role/filter',
    actionDesc: '查看系统角色',
    mockSource,
    onSuccess: (source) => {
      const options = source.data.items.map((i) => {
        return {
          label: `${i.name} (${i.id})`,
          value: i.id,
        }
      })
      source.data = { options }
      return source
    },
  },
  sysUserInfo: {
    url: 'GET rtapi/system/user/item/$id',
    actionDesc: '查看操作人信息',
    mockSource,
  },
}
