import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';

export const Background: VFC = () => {
	const fixedParticleCount = 100
	const randomParticleCount = 100

	return (
		<div css={styles.contianer}>
			{[...Array(fixedParticleCount)].map((_, i) => (
				<div key={i} css={styles.fixedParticleBox}>
					<Particle colors={['white']} />
				</div>
			))}
			{[...Array(randomParticleCount)].map((_, i) => (
				<div key={i} css={styles.randomParticleBox}>
					<Particle colors={['white', '#1da4f7', '#fd7013']} />
				</div>
			))}
		</div>
	)
}

// ==============================================

type ParticleParams = {
	top: number // %
	left: number // %
	size: number // px
	color: string
	isTwinkle: boolean
	twinkleDuration: number // s
}

type ParticleProps = {
	colors: string[]
}

const Particle: VFC<ParticleProps> = ({ colors }) => {
	const randomColor = () => {
		const index = Math.floor(Math.random() * colors.length)
		return colors[index]
	}

	const params: ParticleParams = {
		top: Math.random() * 100,
		left: Math.random() * 100,
		size: Math.max(5, Math.random() * 10),
		color: randomColor(),
		isTwinkle: Math.random() > 0.5,
		twinkleDuration: Math.max(2, Math.random() * 5)
	}

	return (
		<span
			css={[styles.particle(params), params.isTwinkle && styles.twinkle(params.twinkleDuration)]}
		/>
	)
}

// ==============================================
// styles

const animations = {
	twinkle: keyframes`
    0%, 100% {
      opacity: 1
    }
    50% {
      opacity: 0
    }
  `
}

const styles = {
	contianer: css`
		position: absolute;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
	`,
	fixedParticleBox: css`
		position: relative;
		width: 10vw;
		height: 10vh;
		/* border: 1px solid red; */
	`,
	randomParticleBox: css`
		position: absolute;
		width: 100%;
		height: 100%;
	`,
	particle: (params: ParticleParams) => css`
		position: absolute;
		border-radius: 50%;
		width: ${params.size}px;
		height: ${params.size}px;
		top: ${params.top}%;
		left: ${params.left}%;
		background-color: ${params.color};
	`,
	twinkle: (duration: number) => css`
		animation: ${animations.twinkle} ${duration}s ease-in-out infinite;
	`
}
