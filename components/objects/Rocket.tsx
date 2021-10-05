import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { RocketSVG } from '../svg/RocketSVG';

export const Rocket: VFC = () => {
	return (
		<div css={styles.object}>
			<RocketSVG />
		</div>
	)
}

const animations = {
	updown: keyframes`
    0%, 100% {
      transform: rotate(20deg) translateY(-25px);
    }
    50% {
      transform: rotate(20deg) translateY(25px);
    }
  `
}

const styles = {
	object: css`
		position: relative;
		width: 200px;
		height: 200px;
		animation: ${animations.updown} 10s linear infinite;
	`
}
