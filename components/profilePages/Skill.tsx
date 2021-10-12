import React, { useEffect, useRef, useState, VFC } from 'react';
import { css } from '@emotion/react';
import { skills } from '../../resources/skill';
import { ThemeColors } from '../../resources/themes';

export const Skill: VFC = () => {
	const tooltipRef = useRef<HTMLDivElement>(null)
	const hoveredIconNameRef = useRef('')

	useEffect(() => {
		const mousemoveHandler = (e: MouseEvent) => {
			// ツールチップの表示設定
			const tooltipElem = tooltipRef.current!
			// テキストの設定
			tooltipElem.innerHTML = `<span>${hoveredIconNameRef.current}</span>`
			if (hoveredIconNameRef.current) {
				tooltipElem.style.padding = '5px 15px'
			} else {
				tooltipElem.style.padding = '0px'
			}
			// 位置の計算
			const rect = tooltipElem.getBoundingClientRect()
			const x = e.clientX - rect.width / 2
			const y = e.clientY - rect.height - 5
			tooltipElem.style.top = `${y}px`
			tooltipElem.style.left = `${x}px`
		}
		window.addEventListener('mousemove', mousemoveHandler)

		return () => window.removeEventListener('mousemove', mousemoveHandler)
	}, [])

	return (
		<div css={styles.container}>
			<div css={styles.paper}>
				{/* row 1 */}
				<div css={styles.titleContainer}>
					<img css={styles.logo} src="/assets/skill.svg" alt="" />
					<div css={styles.titleText}>Skill</div>
				</div>
				{/* row 2 */}
				<div css={styles.divider} />
				{/* row 3 - 6 */}
				{skills.map((skill, i) => (
					<div key={i}>
						<div css={styles.groupText}>{skill.title}</div>
						<Icons filenames={skill.iconNames} hoveredIconNameRef={hoveredIconNameRef} />
					</div>
				))}
			</div>
			{/* tooltip */}
			<div ref={tooltipRef} css={styles.tooltip} />
		</div>
	)
}

// ==============================================
type IconsProps = {
	filenames: string[]
	hoveredIconNameRef: React.MutableRefObject<string>
}

const Icons: VFC<IconsProps> = props => {
	const { filenames, hoveredIconNameRef } = props

	const mouseenterHandler = (name: string) => {
		hoveredIconNameRef.current = name
	}

	const mouseleaveHandler = () => {
		hoveredIconNameRef.current = ''
	}

	return (
		<div css={styles.iconContainer}>
			{filenames.map((name, i) => (
				<img
					key={i}
					src={`/assets/icons/${name}.svg`}
					height="50px"
					alt=""
					onMouseEnter={() => mouseenterHandler(name)}
					onMouseLeave={mouseleaveHandler}
				/>
			))}
		</div>
	)
}

// ==============================================
const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
		padding: 50px min(50px, 1vw);
		display: flex;
		justify-content: center;
	`,
	paper: css`
		width: min(600px, 100vw);
		height: 100%;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.4);
		border: 2px solid ${ThemeColors.profSkill};
		box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
		border-radius: 20px;
		display: grid;
		grid-template-rows: repeat(6, auto) 1fr;
		grid-gap: 30px;
		color: white;
		overflow: auto;
	`,
	titleContainer: css`
		display: flex;
		align-items: center;
		grid-gap: 10px;
	`,
	logo: css`
		width: 80px;
		height: 80px;
	`,
	titleText: css`
		font-size: clamp(4rem, 4vw, 6rem);
	`,
	divider: css`
		width: 100%;
		height: 2px;
		background-color: white;
	`,
	groupText: css`
		font-size: clamp(2.5rem, 3vw, 4rem);
		margin-bottom: 10px;
	`,
	iconContainer: css`
		display: flex;
		flex-wrap: wrap;
		grid-gap: 20px;
		padding-left: 20px;
	`,
	imageContainer: css`
		position: relative;
		height: 50px;
	`,
	tooltip: css`
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		color: white;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 1;
	`
}
