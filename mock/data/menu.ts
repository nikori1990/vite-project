export const menu: Menu[] = [
    {
        id: '9999',
        pid: '0',
        name: '系统设置',
        icon: 'setting',
        path: '/system',
        children: [
            {
                id: '9999-1',
                pid: '9999',
                name: '用户管理',
                path: '/system/user',
            },
        ],
    },
    {
        id: '8888',
        pid: '0',
        name: '学习',
        icon: 'function',
        path: '/study',
        children: [
            {
                id: '8888-1',
                pid: '8888',
                name: 'computed',
                path: '/study/computed',
            },
            {
                id: '8888-2',
                pid: '8888',
                name: 'watch',
                path: '/study/watch',
            },
            {
                id: '8888-3',
                pid: '8888',
                name: '父子组件传参',
                path: '/study/prop',
            },
        ],
    },
    {
        id: '9998',
        pid: '0',
        name: '功能',
        icon: 'function',
        path: '/function',
        children: [
            {
                id: '9998-1',
                pid: '9998',
                name: '消息提示',
                path: '/function/message',
            },
            {
                id: '9998-2',
                pid: '9998',
                name: '加载',
                path: '/function/loading',
            },
            {
                id: '9998-3',
                pid: '9998',
                name: '水印',
                path: '/function/waterMarker',
            },
        ],
    },
    {
        id: '4',
        pid: '0',
        name: '组件',
        icon: 'components',
        path: '/componentPage',
        children: [
            {
                id: '43',
                pid: '4',
                name: '图标',
                path: '/componentPage/icons',
            },
            {
                id: '41',
                pid: '4',
                name: '表格',
                path: '/componentPage/table',
            },
            {
                id: '42',
                pid: '4',
                name: '表单',
                path: '/componentPage/form',
            },
            {
                id: '44',
                pid: '4',
                name: '数字动画',
                path: '/componentPage/countTo',
            },
            {
                id: '45',
                pid: '4',
                name: 'Ant标签页',
                path: '/componentPage/antTabs',
            },
        ],
    },
    {
        id: '5',
        pid: '0',
        name: '多级菜单',
        path: '/nested',
        icon: 'nested',
        children: [
            {
                id: '51',
                pid: '5',
                name: '菜单1',
                path: '/nested/menu1',
                children: [
                    {
                        id: '511',
                        pid: '51',
                        name: '菜单1-1',
                        path: '/nested/menu1/menu1-1',
                    },
                    {
                        id: '512',
                        pid: '51',
                        name: '菜单1-2',
                        path: '/nested/menu1/menu1-2',
                        children: [
                            {
                                id: '5121',
                                pid: '512',
                                name: '菜单1-2-1',
                                path: '/nested/menu1/menu1-2/menu1-2-1',
                            },
                            {
                                id: '5122',
                                pid: '512',
                                name: '菜单1-2-2',
                                path: '/nested/menu1/menu1-2/menu1-2-2',
                            },
                        ],
                    },
                    {
                        id: '513',
                        pid: '51',
                        name: '菜单1-3',
                        path: '/nested/menu1/menu1-3',
                    },
                ],
            },
            {
                id: '52',
                pid: '5',
                name: '菜单2',
                path: '/nested/menu2',
            },
        ],
    },
]
