import { AnimatePresence } from 'framer-motion';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState, VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { Card } from '../components/applicationPage/Card';
import { Layout } from '../components/layouts/Layout';
import { AppStar } from '../components/stars/AppStar';
import {
	useApplicationMountAnimation, useApplicationUnmountAnimation
} from '../hooks/applicationAnimations';
import { ApplicationDetail } from '../libs/types';
import { alphaColor } from '../libs/utils';
import { applicationUrls } from '../resources/application';
import { ThemeColors } from '../resources/themes';
import { getApplicationDetails } from '../server/ogp';

type ApplicationProps = {
	appDetails: ApplicationDetail[]
}

const Application: VFC<ApplicationProps> = ({ appDetails }) => {
	const router = useRouter()
	const containerRef = useRef<HTMLDivElement>(null)
	const logoRef = useRef<HTMLDivElement>(null)
	const appIndexRef = useRef(0)
	const [cardMount, setCardMount] = useState(false)
	const socrollLockRef = useRef(false)

	useApplicationMountAnimation(logoRef, setCardMount)

	useEffect(() => {
		containerRef.current!.onmousemove = e => {
			let x = e.clientX - window.innerWidth / 2
			let y = e.clientY - window.innerHeight / 2
			x = Math.min(900, x)
			y = Math.min(500, y)
			containerRef.current!.style.setProperty('--mx', x + 'px')
			containerRef.current!.style.setProperty('--my', y + 'px')
		}

		containerRef.current!.onwheel = e => {
			e.preventDefault()

			if (socrollLockRef.current) return
			socrollLockRef.current = true

			const direction = e.deltaY / Math.abs(e.deltaY)
			if (0 < direction && appIndexRef.current < appDetails.length - 1) {
				// 下スクロールしたとき
				appIndexRef.current++
				setCardMount(false)
			} else if (direction < 0 && 0 < appIndexRef.current) {
				// 上スクロールしたとき
				appIndexRef.current--
				setCardMount(false)
			}

			setTimeout(() => {
				// 連続したスクロールを禁止する
				socrollLockRef.current = false
			}, 500)
		}
	}, [])

	const navClickHandler = (index: number, isCurrentCard: boolean) => {
		if (isCurrentCard) return
		appIndexRef.current = index
		setCardMount(false)
	}

	const logoClickHandler = () => {
		// unmount時のアニメーション
		useApplicationUnmountAnimation(logoRef)

		setTimeout(() => {
			router.push('/')
		}, 1800)
	}

	return (
		<Layout title="Application｜Portforio">
			<div ref={containerRef} css={styles.container}>
				{/* logo */}
				<div id="app-logo" ref={logoRef} css={styles.star} onClick={logoClickHandler}>
					<AppStar />
				</div>
				<div id="app-contents" css={styles.contents}>
					{/* background */}
					<div id="app-background" css={styles.backgroundCircle} />
					{/* title */}
					<div css={styles.header}>
						<h1 id="app-title" css={styles.title}>
							Applications
						</h1>
						<div id="app-divider" css={styles.divider} />
					</div>
					{/* card */}
					<div css={styles.main}>
						{/* card */}
						<AnimatePresence>
							{cardMount && (
								<Card appDetail={appDetails[appIndexRef.current]} setCardMount={setCardMount} />
							)}
						</AnimatePresence>
						{/* navigator */}
						<div id="app-nav" css={styles.navContainer}>
							{appDetails.map((_, i) => {
								const isCurrentCard = i === appIndexRef.current
								return (
									<div
										key={i}
										css={[styles.navItem, cardMount && isCurrentCard && styles.activeNav]}
										onClick={() => navClickHandler(i, isCurrentCard)}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Application

export const getStaticProps: GetStaticProps = async context => {
	const appDetails = await getApplicationDetails(applicationUrls)

	return {
		props: { appDetails }
	}
}

// ==============================================
// styles

const template = {
	flex: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`
}

const animations = {
	logo: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `,
	wave: keyframes`
    0% {
      transform: scale(0);
      opacity: 1;
      border: 10px solid ${ThemeColors.application};
    }
    30% {
      transform: scale(1);
      opacity: 1;
      border: 10px solid ${ThemeColors.appCircle};
    }
    100% {
      transform: scale(10);
      opacity: 0;
      border: 10px solid ${ThemeColors.appCircle};
    }
  `
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: ${ThemeColors.dark};
		${template.flex}
	`,
	backgroundCircle: css`
		position: absolute;
		bottom: calc(-20vw / 2);
		right: calc(-30vw / 2);
		width: 30vw;
		height: 30vw;
		border-radius: 50%;
		background-color: ${ThemeColors.appCircle};

		&::before {
			content: '';
			position: absolute;
			width: 30vw;
			height: 30vw;
			border-radius: 50%;
			transform: scale(0);
			animation: ${animations.wave} 10s linear infinite 7s;
		}
	`,
	star: css`
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: ${ThemeColors.application};
		cursor: pointer;
		${template.flex}
		z-index: 10;
		animation: ${animations.logo} 20s linear infinite;
	`,
	contents: css`
		position: relative;
		width: 100%;
		height: 100%;
		background-color: ${ThemeColors.application};
		color: white;
		display: grid;
		grid-template-rows: auto 1fr;
		transform-origin: top left;
		overflow: hidden;
	`,
	header: css`
		position: relative;
		width: 100%;
		height: 120px;
		padding-left: 100px;
		display: flex;
		align-items: center;
	`,
	title: css`
		font-size: clamp(4rem, 4vw, 6rem);
		font-weight: normal;
		line-height: 0;
		margin-left: min(5vw, 50px);
	`,
	divider: css`
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 2px;
		background-color: white;
	`,
	main: css`
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	`,
	navContainer: css`
		position: absolute;
		top: 20px;
		display: flex;
		grid-gap: 20px;
	`,
	navItem: css`
		width: 30px;
		height: 30px;
		background-color: rgba(0, 0, 0, 0.5);
		box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(10px);
		cursor: pointer;
		transition: 0.5s;
	`,
	activeNav: css`
		background-color: ${alphaColor(ThemeColors.appCircle, 0.5)};
		box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.25);
		transform: translate(-5px, -5px);
	`
}
