import { color } from 'csx';
import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { QiitaSVG } from '../svg/QiitaSVG';

export const QiitaStar: VFC = () => {
	return (
		<div css={styles.star}>
			<div css={styles.logo}>
				<QiitaSVG />
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
  `
}

const styles = {
	star: css`
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #53c300;
		box-shadow: 0 0 50px 50px ${color('#53c300').fade(0.5).toString()};
		display: flex;
		justify-content: center;
		align-items: center;
		animation: ${animaions.rotate} 20s linear infinite;
	`,
	logo: css`
		position: absolute;
		width: 60%;
		height: 60%;
	`
}
