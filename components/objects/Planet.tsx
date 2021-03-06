import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { PlanetSVG } from '../svg/PlanetSVG';

export const Planet: VFC = () => {
	return (
		<div css={styles.object}>
			<PlanetSVG />
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
		width: 250px;
		height: 250px;
		animation: ${animations.updown} 10s ease-in-out infinite;
	`
}
