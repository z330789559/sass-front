/**
 * 页面预设值，本文件不要引入模块
 */

export default {
  // 页面需要用到的权限定义
  limits: {
    // 路由权限
    $page: {
      label: '查看列表',
    },
    editRole: {
      label: '编辑角色',
    },
    addRole: {
      label: '添加角色',
      needs: ['editRole'],
    },
    editLimit: {
      label: '编辑权限',
      needs: ['editRole'],
    },
    listMember: {
      label: '角色成员列表',
      needs: ['editRole'],
    },
    editMember: {
      label: '修改角色成员',
      needs: ['listMember'],
    },
    delRole: {
      label: '删除角色',
      needs: ['editRole'],
    },
  },
  // 页面需要用到的 api定义
  apis: {
    list: {
      url: 'GET rtapi/system/role/item',
      limits: '$page',
    },
    addRole: {
      url: 'POST rtapi/system/role/item',
      limits: 'addRole',
    },
    editRole: {
      url: 'PUT rtapi/ystem/role/item/$id',
      limits: 'editRole',
    },
    delRole: {
      url: 'DELETE rtapi/system/role/item/$id',
      limits: 'delRole',
    },
    getLimit: {
      url: 'GET rtapi/system/role/item/$id/limit',
      limits: 'editLimit',
    },
    editLimit: {
      url: 'PUT rtapi/system/role/item/$id/limit',
      limits: 'editLimit',
      onPreRequest: (source) => {
        const { id, authApi: api = '', authLimit: limit = '' } = source.data
        source.data = { id, api, limit }
        return source
      },
    },
    listMember: {
      url: 'GET rtapi/system/user/item',
      limits: 'listMember',
      mock: true,
    },
    editMember: {
      url: 'PUT rtapi/system/role/member',
      limits: 'editMember',
      mock: true,
      onPreRequest: (source) => {
        const { ids, newRoleId } = source.data
        source.data = {
          userIds: ids.split(',').map((i) => Number(i)),
          roleId: newRoleId,
        }
        return source
      },
    },
  },
}
