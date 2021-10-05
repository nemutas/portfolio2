import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { AstronoutSVG } from '../svg/AstronoutSVG';

export const Astronout: VFC = () => {
	return (
		<div css={styles.object}>
			<AstronoutSVG />
		</div>
	)
}

const animations = {
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
	object: css`
		position: relative;
		width: 150px;
		height: 150px;
		/* border: 1px solid red; */
		animation: ${animations.rotate} 20s linear infinite;
	`
}
