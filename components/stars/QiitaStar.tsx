import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { ThemeColors } from '../../resources/themes';
import { QiitaSVG } from '../svg/QiitaSVG';
import { StarLayout } from './StarLayout';

export const QiitaStar: VFC = () => {
	return (
		<StarLayout url={'https://qiita.com/nemutas'} color={ThemeColors.qiita} rotateTo={-360}>
			<div css={styles.logo}>
				<QiitaSVG />
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
