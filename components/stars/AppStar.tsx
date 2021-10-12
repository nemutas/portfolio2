import { color } from 'csx';
import React, { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { ThemeColors } from '../../resources/themes';
import { AppSVG } from '../svg/AppSVG';
import { StarLayout } from './StarLayout';

export const LinkedAppStar: VFC = () => {
	return (
		<StarLayout
			color={ThemeColors.application}
			rotateTo={360}
			href="/application"
			autoCloseActiveScreen={false}>
			<AppStar />
		</StarLayout>
	)
}

export const AppStar: VFC = () => {
	return (
		<div css={styles.logo}>
			<AppSVG />
		</div>
	)
}

const styles = {
	logo: css`
		position: absolute;
		width: 60%;
		height: 60%;
	`
}
