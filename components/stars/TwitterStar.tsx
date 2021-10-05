import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { TwitterSVG } from '../svg/TwitterSVG';
import { OuterLinkStarLayout } from './OuterLinkStarLayout';

export const TwitterStar: VFC = () => {
	return (
		<OuterLinkStarLayout url={'https://twitter.com/focru_ino'} color={'#1da4f7'}>
			<div css={styles.bird}>
				<TwitterSVG />
			</div>
		</OuterLinkStarLayout>
	)
}

const styles = {
	bird: css`
		position: absolute;
		width: 60%;
		height: 60%;
	`
}
