export const schema = {
  'type': 'page',
  'body': [
    {
      'type': 'tabs',
      'tabs': [
        {
          'title': '选项卡1',
          'hash': 'tab1',
          'body': '选项卡内容1'
        },
        {
          'title': '选项卡2',
          'hash': 'tab2',
          'body': {
            'type': 'form',
            'panelClassName': 'panel-primary',
            'controls': [
              {
                'type': 'text',
                'name': 'a',
                'label': '文本'
              }
            ]
          }
        },
        {
          'title': '选项卡3',
          'body': {
            'type': 'crud',
            'api': 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample',
            'filter': {
              'title': '条件搜索',
              'submitText': '',
              'controls': [
                {
                  'type': 'text',
                  'name': 'keywords',
                  'placeholder': '通过关键字搜索',
                  'clearable': true,
                  'addOn': {
                    'label': '搜索',
                    'type': 'submit'
                  }
                },
                {
                  'type': 'plain',
                  'text': '这里的表单项可以配置多个'
                }
              ]
            },
            'columns': [
              {
                'name': 'id',
                'label': 'ID',
                'width': 20
              },
              {
                'name': 'engine',
                'label': 'Rendering engine'
              },
              {
                'name': 'browser',
                'label': 'Browser'
              },
              {
                'name': 'platform',
                'label': 'Platform(s)'
              },
              {
                'name': 'version',
                'label': 'Engine version'
              },
              {
                'name': 'grade',
                'label': 'CSS grade'
              },
              {
                'type': 'operation',
                'label': '操作',
                'width': 100,
                'buttons': []
              }
            ]
          }
        }
      ]
    },
    {
      'type': 'divider'
    },
    {
      'type': 'tabs',
      'mode': 'line',
      'tabs': [
        {
          'title': '选项卡1',
          'body': '选项卡内容1'
        },
        {
          'title': '选项卡2',
          'body': '选项卡内容2'
        },
        {
          'title': '选项卡3',
          'body': '选项卡内容3'
        }
      ]
    },
    {
      'type': 'divider'
    },
    {
      'type': 'tabs',
      'mode': 'card',
      'tabs': [
        {
          'title': '选项卡1',
          'body': '选项卡内容1'
        },
        {
          'title': '选项卡2',
          'body': '选项卡内容2'
        },
        {
          'title': '选项卡3',
          'body': '选项卡内容3'
        }
      ]
    },
    {
      'type': 'divider'
    },
    {
      'type': 'tabs',
      'mode': 'chrome',
      'tabs': [
        {
          'title': '选项卡1',
          'body': '选项卡内容1'
        },
        {
          'title': '选项卡2',
          'body': '选项卡内容2'
        },
        {
          'title': '选项卡3',
          'body': '选项卡内容3'
        }
      ]
    },
    {
      'type': 'divider'
    },
    {
      'type': 'tabs',
      'mode': 'radio',
      'tabs': [
        {
          'title': '选项卡1',
          'body': '选项卡内容1'
        },
        {
          'title': '选项卡2',
          'body': '选项卡内容2'
        },
        {
          'title': '选项卡3',
          'body': '选项卡内容3'
        }
      ]
    },
    {
      'type': 'divider'
    },
    {
      'type': 'tabs',
      'mode': 'tiled',
      'tabs': [
        {
          'title': '选项卡1',
          'body': '选项卡内容1'
        },
        {
          'title': '选项卡2',
          'body': '选项卡内容2'
        },
        {
          'title': '选项卡3',
          'body': '选项卡内容3'
        },
        {
          'title': '选项卡4',
          'body': '选项卡内容4',
          'icon': 'fa fa-flag',
          'iconPosition': 'right'
        }
      ]
    },
    {
      'type': 'divider'
    },
    {
      'type': 'tabs',
      'mode': 'vertical',
      'tabs': [
        {
          'title': '选项卡1',
          'body': '选项卡内容1'
        },
        {
          'title': '选项卡2',
          'body': '选项卡内容2'
        },
        {
          'title': '选项卡3',
          'body': '选项卡内容3'
        },
        {
          'title': '选项卡4',
          'body': '选项卡内容4'
        },
        {
          'title': '选项卡5',
          'body': '选项卡内容5'
        }
      ]
    }
  ],
  'definitions': {
    'sysRoleIdPicker': {
      'limits': '/_global/system/sysRoleIdPicker',
      'type': 'select',
      'name': 'roleIds',
      'clearable': true,
      'multiple': true,
      'searchable': true,
      'label': '角色名',
      'placeholder': '请选择角色',
      'searchPromptText': '输入角色ID/角色名',
      'source': {
        'url': 'GET /system/role/filter',
        'actionDesc': '查看系统角色',
        'mockSource': {}
      }
    }
  },
  'preset': {}
}