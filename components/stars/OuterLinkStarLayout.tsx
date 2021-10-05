import { color } from 'csx';
import React, { useEffect, useRef, useState, VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { QiitaSVG } from '../svg/QiitaSVG';

type OuterLinkStarLayoutProps = {
	url: string
	color: string
	children: React.ReactNode
	isReverseRotation?: boolean
}

export const OuterLinkStarLayout: VFC<OuterLinkStarLayoutProps> = props => {
	const { url, color, children, isReverseRotation = false } = props

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
				window.setTimeout(() => {
					// 0.5秒後にページ遷移する
					window.open(url, '_blank')
					setActive(false)
				}, 500)
			}
		}
	}, [])

	return (
		<div css={styles.star(color, isReverseRotation)} onClick={clickHandler}>
			<div
				ref={screenRef}
				css={[styles.screen(color), active && styles.activeScreen(radius.current * 2)]}
			/>
			{children}
		</div>
	)
}

const animaions = {
	rotate: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `,
	rotateRevarse: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  `
}

const styles = {
	star: (themeColor: string, isReverseRotation: boolean) => css`
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
		animation: ${isReverseRotation ? animaions.rotateRevarse : animaions.rotate} 20s linear infinite;
		transition: box-shadow 0.5s;

		&:hover {
			box-shadow: 0 0 100px 100px ${color(themeColor).fade(0.8).toString()};
			transition: box-shadow 0.2s;
		}
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
