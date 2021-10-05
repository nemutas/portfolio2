import 'sanitize.css';
import '../styles/globals.css';
import Head from 'next/head';
import React, { VFC } from 'react';

import type { AppProps } from 'next/app'
const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
	// React.useEffect(() => {
	// 	// Remove the server-side injected CSS.
	// 	const jssStyles = document.querySelector('#jss-server-side')
	// 	if (jssStyles && jssStyles.parentElement) {
	// 		jssStyles.parentElement.removeChild(jssStyles)
	// 	}
	// }, [])

	return (
		<>
			<Head>
				<title />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
