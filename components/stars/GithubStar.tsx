import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { ThemeColors } from '../../resources/themes';
import { GithubSVG } from '../svg/GithubSVG';
import { StarLayout } from './StarLayout';

export const GithubStar: VFC = () => {
	return (
		<StarLayout url={'https://github.com/nemutas'} color={ThemeColors.github} rotateTo={-360}>
			<div css={styles.ring} />
			<div css={styles.octo}>
				<GithubSVG />
			</div>
		</StarLayout>
	)
}

const animaions = {
	octo: keyframes`
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  `
}

const styles = {
	ring: css`
		position: absolute;
		width: 80%;
		height: 80%;
		border-radius: 50%;
		border: 15px solid #1e1e1e;
	`,
	octo: css`
		position: absolute;
		top: -40%;
		width: 50%;
		height: 50%;
		animation: ${animaions.octo} 5s ease infinite;
	`
}
