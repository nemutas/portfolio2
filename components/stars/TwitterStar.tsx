import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { ThemeColors } from '../../resources/themes';
import { TwitterSVG } from '../svg/TwitterSVG';
import { StarLayout } from './StarLayout';

export const TwitterStar: VFC = () => {
	return (
		<StarLayout url={'https://twitter.com/focru_ino'} color={ThemeColors.twitter} rotateTo={360}>
			<div css={styles.bird}>
				<TwitterSVG />
			</div>
		</StarLayout>
	)
}

const styles = {
	bird: css`
		position: absolute;
		width: 60%;
		height: 60%;
	`
}
