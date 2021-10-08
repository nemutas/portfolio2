import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { StarLayout } from './StarLayout';

export const LinkedProfileStar: VFC = () => {
	return (
		<StarLayout color={'#f6d04d'} href="/profile" autoCloseActiveScreen={false}>
			<ProfileStar />
		</StarLayout>
	)
}

export const ProfileStar: VFC = () => {
	const textSplit = (text: string, color: string) => {
		return text.split('').map(char => {
			return { char, color }
		})
	}
	const mainText = textSplit('Nemutas', '#db0063')
	const subText = textSplit('｜Web Frontend Engineer', '#1e1e1e')
	const text = [...mainText, ...subText]

	return (
		<>
			{/* text */}
			<div css={styles.text}>
				{text.map((obj, i) => (
					<span key={i} css={styles.char(i * 12, obj.color)}>
						{obj.char}
					</span>
				))}
			</div>
			{/* logo */}
			<div css={styles.logo}>
				<img css={styles.img} src="/assets/avatar.jpg" alt="" draggable={false} />
			</div>
		</>
	)
}

const animations = {
	rotateText: keyframes`
	0% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
	}
`
}

const styles = {
	logo: css`
		position: relative;
		width: 70%;
		height: 70%;
		border-radius: 50%;
		overflow: hidden;
	`,
	img: css`
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition: transform 0.2s linear;

		&:hover {
			transform: scale(1.2);
		}
	`,
	text: css`
		position: absolute;
		width: 100%;
		height: 100%;
		font-family: Consolas;
		font-size: 2rem;
		animation: ${animations.rotateText} 10s linear infinite;
	`,
	char: (rotateDeg: number, fontColor: string) => css`
		position: absolute;
		left: 50%;
		transform: rotate(${rotateDeg}deg);
		transform-origin: 0 100px;
		color: ${fontColor};
	`
}
