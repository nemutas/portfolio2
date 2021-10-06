import Head from 'next/head';
import React, { VFC } from 'react';

type LayoutProps = {
	title?: string
	description?: string
	children: React.ReactNode
}

export const Layout: VFC<LayoutProps> = props => {
	const { title = 'Nemutas｜Portfolio', description = "nemutas's portfolio site", children } = props
	return (
		<>
			{/* head */}
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{children}
		</>
	)
}
