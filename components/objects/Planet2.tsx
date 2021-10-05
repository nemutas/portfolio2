import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { Planet2SVG } from '../svg/Planet2SVG';

export const Planet2: VFC = () => {
	return (
		<div css={styles.object}>
			<Planet2SVG />
		</div>
	)
}

const animations = {
	updown: keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100px);
    }
  `
}

const styles = {
	object: css`
		position: relative;
		width: 150px;
		height: 150px;
		animation: ${animations.updown} 10s ease-in-out infinite;
	`
}
