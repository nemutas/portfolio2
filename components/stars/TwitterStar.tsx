import { color } from 'csx';
import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { LinkLayout } from '../layouts/LinkLayout';
import { TwitterSVG } from '../svg/TwitterSVG';

export const TwitterStar: VFC = () => {
	return (
		<LinkLayout href={'https://twitter.com/focru_ino'} isOuterLink>
			<div css={styles.star}>
				<div css={styles.bird}>
					<TwitterSVG />
				</div>
			</div>
		</LinkLayout>
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
  `
}

const styles = {
	star: css`
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #1da4f7;
		box-shadow: 0 0 50px 50px ${color('#1da4f7').fade(0.5).toString()};
		display: flex;
		justify-content: center;
		align-items: center;
		animation: ${animaions.rotate} 20s linear infinite;
	`,
	bird: css`
		position: absolute;
		width: 60%;
		height: 60%;
	`
}
