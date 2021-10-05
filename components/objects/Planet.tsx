import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { PlanetSVG } from '../svg/PlanetSVG';

export const Planet: VFC = () => {
	return (
		<div css={styles.object}>
			<PlanetSVG />
		</div>
	)
}

const styles = {
	object: css`
		position: relative;
		width: 250px;
		height: 250px;
		/* border: 1px solid red; */
	`
}
