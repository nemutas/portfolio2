import { color } from 'csx';
import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { GithubSVG } from '../svg/GithubSVG';
import { OuterLinkStarLayout } from './OuterLinkStarLayout';

export const GithubStar: VFC = () => {
	return (
		<OuterLinkStarLayout url={'https://github.com/nemutas'} color={'#fff'} isReverseRotation>
			<div css={styles.ring} />
			<div css={styles.octo}>
				<GithubSVG />
			</div>
		</OuterLinkStarLayout>
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
