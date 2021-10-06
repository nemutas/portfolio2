import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { TwitterSVG } from '../svg/TwitterSVG';
import { StarLayout } from './StarLayout';

export const TwitterStar: VFC = () => {
	return (
		<StarLayout url={'https://twitter.com/focru_ino'} color={'#1da4f7'} rotateTo={360}>
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
