import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { EarthSVG } from '../svg/EarthSVG';

export const Earth: VFC = () => {
	return (
		<div css={styles.object}>
			<EarthSVG />
		</div>
	)
}

const animations = {
	updown: keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100px);
    }
  `
}

const styles = {
	object: css`
		position: relative;
		width: 150px;
		height: 150px;
		/* border: 1px solid red; */
		animation: ${animations.updown} 10s ease-in-out infinite;
	`
}
