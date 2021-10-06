import { color } from 'csx';
import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { AppSVG } from '../svg/AppSVG';
import { StarLayout } from './StarLayout';

export const AppStar: VFC = () => {
	return (
		<StarLayout color={'#fd7013'} rotateTo={360} autoCloseActiveScreen={false}>
			<div css={styles.logo}>
				<AppSVG />
			</div>
		</StarLayout>
	)
}

const styles = {
	logo: css`
		position: absolute;
		width: 60%;
		height: 60%;
	`
}
