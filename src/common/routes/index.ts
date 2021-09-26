import React from 'react'
import Login from '@/modules/login/login'

interface IRouteMeta {
	name: string
	icon?: string
	role?: string
}
interface IRoute {
	path: string
	key: string
	// 路由组件
	component?: any
	redirect?: string
	hidden?: boolean
	meta?: IRouteMeta
	subMenu?: IRoute[]
}

export const routes: IRoute[] = [
	{
		path: '/login',
		key: '/login',
		component: Login,
		hidden: true,
	},
	{
		path: '/monitor',
		key: '/monitor',
		meta: {
			name: '标识管理',
			icon: 'icon-quanju_yuming1',
		},
		subMenu: [
			{
				path: '/monitor/add',
				key: '/monitor/add',
				component: Login,
				hidden: true,
				meta: {
					name: '添加标识',
				},
			},
		],
	},
]
