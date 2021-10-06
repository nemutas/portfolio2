import { color } from 'csx';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState, VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import { css, keyframes } from '@emotion/react';
import { starCenterPosition } from '../../libs/store';

type StarLayoutProps = {
	url?: string
	href?: string
	color: string
	children: React.ReactNode
	rotateTo?: 360 | -360
	autoCloseActiveScreen?: boolean
}

export const StarLayout: VFC<StarLayoutProps> = props => {
	const { url, href, color, children, rotateTo, autoCloseActiveScreen = true } = props

	const router = useRouter()
	const setStarCenterPosition = useSetRecoilState(starCenterPosition)
	const screenRef = useRef<HTMLDivElement>(null)
	const [active, setActive] = useState(false)
	const activeRef = useRef(false)
	const radius = useRef(0)

	const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const toTopLeftLength = Math.sqrt(Math.pow(0 - e.clientX, 2) + Math.pow(0 - e.clientY, 2))
		const toBottomLeftLength = Math.sqrt(
			Math.pow(0 - e.clientX, 2) + Math.pow(window.innerHeight - e.clientY, 2)
		)
		const toTopRightLength = Math.sqrt(
			Math.pow(window.innerWidth - e.clientX, 2) + Math.pow(0 - e.clientY, 2)
		)
		const toBottomRightLength = Math.sqrt(
			Math.pow(window.innerWidth - e.clientX, 2) + Math.pow(window.innerHeight - e.clientY, 2)
		)
		radius.current = Math.max(
			toTopLeftLength,
			toBottomLeftLength,
			toTopRightLength,
			toBottomRightLength
		)

		setActive(!active)
	}

	useEffect(() => {
		screenRef.current!.ontransitionend = () => {
			activeRef.current = !activeRef.current
			if (activeRef.current) {
				// 0.5秒後にページ遷移する
				window.setTimeout(() => {
					// 恒星の位置を記憶する
					const rect = screenRef.current!.getBoundingClientRect()
					const top = rect.top + rect.height / 2
					const left = rect.left + rect.width / 2
					setStarCenterPosition({ top, left })

					// 外部サイトへ
					if (url) window.open(url, '_blank')
					// 他ページへ
					else if (href) router.push(href)

					autoCloseActiveScreen && setActive(false)
				}, 500)
			}
		}
	}, [])

	return (
		<div
			css={[styles.star(color), rotateTo && styles.rotateAnimation(rotateTo)]}
			onClick={clickHandler}>
			<div
				ref={screenRef}
				css={[styles.screen(color), active && styles.activeScreen(radius.current * 2)]}
			/>
			{children}
		</div>
	)
}

const animaions = {
	rotate: (rotate: number) => keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(${rotate}deg);
    }
  `
}

const styles = {
	star: (themeColor: string) => css`
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: ${themeColor};
		box-shadow: 0 0 50px 50px ${color(themeColor).fade(0.5).toString()};
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 0;
		transition: box-shadow 0.5s;

		&:hover {
			z-index: 10;
			box-shadow: 0 0 100px 100px ${color(themeColor).fade(0.8).toString()};
			transition: box-shadow 0.2s;
		}
	`,
	rotateAnimation: (rotate: number) => css`
		animation: ${animaions.rotate(rotate)} 20s linear infinite;
	`,
	screen: (themeColor: string) => css`
		position: absolute;
		width: 1px;
		height: 1px;
		border-radius: 50%;
		background-color: ${themeColor};
		transform: scale(1);
		transition: 1.5s ease-in-out;
	`,
	activeScreen: (diameter: number) => css`
		transform: scale(${diameter + 200});
	`
}
