import { color } from 'csx';
import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { GithubSVG } from '../svg/GithubSVG';

export const GithubStar: VFC = () => {
	return (
		<div css={styles.star}>
			<div css={styles.octo}>
				<GithubSVG />
			</div>
		</div>
	)
}

const animaions = {
	rotate: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  `,
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
	star: css`
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 0 50px 50px ${color('#fff').fade(0.5).toString()};
		display: flex;
		justify-content: center;
		align-items: center;
		animation: ${animaions.rotate} 20s linear infinite;
		transition: box-shadow 0.5s;

		&::before {
			content: '';
			width: 80%;
			height: 80%;
			border-radius: 50%;
			border: 10px solid #1e1e1e;
		}
		&:hover {
			box-shadow: 0 0 100px 100px ${color('#fff').fade(0.8).toString()};
			transition: box-shadow 0.2s;
		}
	`,
	octo: css`
		position: absolute;
		top: -40%;
		width: 50%;
		height: 50%;
		animation: ${animaions.octo} 5s ease infinite;
	`
}
