import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Planet } from './Planet';

export const Objects: VFC = () => {
	return (
		<>
			<div css={styles.planet}>
				<Planet />
			</div>
		</>
	)
}

const styles = {
	planet: css`
		position: absolute;
		right: 5%;
	`
}
