export default {
  limits: {
    $page: {
      label: '查看列表',
    },
    add: {
      label: '添加',
    },
    edit: {
      label: '编辑',
    },
    del: {
      label: '删除',
    },
  },
  apis: {
    list: {
      url: 'GET http://121.89.194.107:8081/rtapi/document/item?size=50&page=1',
      limits: '$page',
      onPreRequest: (source) => {
        const { dateRange } = source.data
        if (dateRange) {
          const arr = dateRange.split('%2C')
          source.data = {
            ...source.data,
            startDate: arr[0],
            endDate: arr[1],
          }
        }
        return source
      },
    },
    add: {
      url: 'POST document/item',
      limits: 'add',
    },
    edit: {
      url: 'PUT document/item/$id',
      limits: 'edit',
    },
    del: {
      url: 'DELETE document/item/$id',
      limits: 'del',
    },
  },
}
