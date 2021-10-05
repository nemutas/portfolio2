import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { QiitaSVG } from '../svg/QiitaSVG';
import { OuterLinkStarLayout } from './OuterLinkStarLayout';

export const QiitaStar: VFC = () => {
	return (
		<OuterLinkStarLayout url={'https://qiita.com/nemutas'} color={'#53c300'} isReverseRotation>
			<div css={styles.logo}>
				<QiitaSVG />
			</div>
		</OuterLinkStarLayout>
	)
}

const styles = {
	logo: css`
		position: absolute;
		width: 60%;
		height: 60%;
	`
}
