import React from 'react'
import { Layout } from 'antd'
import './layout.scss'
import PrimarySidebar from './primarySidebar'
import PrimaryHeader from './primaryHeader'

const { Content } = Layout
// interface Iprops {
// 	children: JSX.Element
// 	ParaphraseWrap: JSX.Element
// }
const primaryLayout = (): JSX.Element => {
	return (
		<Layout className="main-layout">
			<PrimarySidebar />
			<Layout className="main-wrap">
				<PrimaryHeader />
				<Content
					className="main-content"
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
					}}
				>
					Contentsl
				</Content>
			</Layout>
		</Layout>
	)
}

export default primaryLayout
