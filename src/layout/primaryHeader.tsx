import React from 'react'
import { Layout, Menu, Avatar, Dropdown, Breadcrumb } from 'antd'
import { MenuFoldOutlined, DownOutlined } from '@ant-design/icons'

const { Header } = Layout

const primaryHeader = (): JSX.Element => {
	const handleLogout = () => {}
	const menu = (
		<Menu>
			{/* <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item>个人设置</Menu.Item>
        <Menu.Item>系统设置</Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider /> */}
			<Menu.Item onClick={handleLogout}>退出登录</Menu.Item>
		</Menu>
	)
	return (
		<Header className="layout-header" style={{ padding: 0 }}>
			<div className="header-left">
				<MenuFoldOutlined />
			</div>
			<div className="header-right">
				<Avatar className="avatar" />
				<Dropdown
					overlayStyle={{ zIndex: 2000 }}
					overlay={menu}
					getPopupContainer={(node) => node}
				>
					<div className="ant-dropdown-link">
						你好
						<DownOutlined />
					</div>
				</Dropdown>
			</div>
		</Header>
	)
}

export default primaryHeader
