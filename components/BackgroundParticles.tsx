import React, { VFC } from 'react';
import Particles, { IOptions, RecursivePartial } from 'react-tsparticles';
import { css } from '@emotion/react';
import params from '../resources/particles.json';

export const BackgroundParticles: VFC = () => {
	return (
		<div css={styles.container}>
			<Particles options={params as RecursivePartial<IOptions>} />
		</div>
	)
}

const styles = {
	container: css`
		position: absolute;
		width: 100vw;
		height: 100vh;
	`
}
