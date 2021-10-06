import 'sanitize.css';
import '../styles/globals.css';
import Head from 'next/head';
import React, { VFC } from 'react';
import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app'
const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	)
}
export default MyApp
