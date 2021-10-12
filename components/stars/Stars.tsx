import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { ThemeColors } from '../../resources/themes';
import { LinkedAppStar } from './AppStar';
import { GithubStar } from './GithubStar';
import { LinkPath } from './LinkPath';
import { LinkedProfileStar } from './ProfileStar';
import { QiitaStar } from './QiitaStar';
import { TwitterStar } from './TwitterStar';

export const Stars: VFC = () => {
	const profileRef = useRef<HTMLDivElement>(null)
	const githubRef = useRef<HTMLDivElement>(null)
	const twitterRef = useRef<HTMLDivElement>(null)
	const qiitaRef = useRef<HTMLDivElement>(null)
	const appRef = useRef<HTMLDivElement>(null)

	return (
		<>
			<div ref={profileRef} css={styles.profile}>
				<LinkedProfileStar />
			</div>
			<div ref={githubRef} css={styles.github}>
				<GithubStar />
			</div>
			<div ref={twitterRef} css={styles.twitter}>
				<TwitterStar />
			</div>
			<div ref={qiitaRef} css={styles.qiita}>
				<QiitaStar />
			</div>
			<div ref={appRef} css={styles.app}>
				<LinkedAppStar />
			</div>
			<LinkPath startRef={profileRef} endRef={githubRef} color={ThemeColors.github} />
			<LinkPath startRef={profileRef} endRef={twitterRef} color={ThemeColors.twitter} />
			<LinkPath startRef={profileRef} endRef={qiitaRef} color={ThemeColors.qiita} />
			<LinkPath startRef={profileRef} endRef={appRef} color={ThemeColors.application} />
		</>
	)
}

const styles = {
	profile: css``,
	github: css`
		position: absolute;
		top: 20%;
		left: 10%;
	`,
	twitter: css`
		position: absolute;
		top: 10%;
		right: 10%;
	`,
	qiita: css`
		position: absolute;
		bottom: 10%;
		right: 15%;
	`,
	app: css`
		position: absolute;
		bottom: 15%;
		left: 15%;
	`
}
