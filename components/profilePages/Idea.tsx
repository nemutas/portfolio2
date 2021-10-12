import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { IdeaDetail, ideas } from '../../resources/idea';
import { ThemeColors } from '../../resources/themes';

export const Idea: VFC = () => {
	return (
		<div css={styles.container}>
			<div css={styles.paper}>
				{/* row 1 */}
				<div css={styles.titleContainer}>
					<img css={styles.logo} src="/assets/idea.svg" alt="" />
					<div css={styles.titleText}>Idea</div>
				</div>
				{/* row 2 */}
				<div css={styles.divider} />
				{/* row 3 - 4 */}
				{ideas.map((detail, i) => (
					<Detail key={i} detail={detail} />
				))}
			</div>
		</div>
	)
}

// ==============================================
type DetailProps = {
	detail: IdeaDetail
}

const Detail: VFC<DetailProps> = ({ detail }) => {
	return (
		<div css={styles.detailContainer}>
			<div css={styles.detailTitle}>{detail.title}</div>
			<div css={styles.detailText}>{detail.text}</div>
		</div>
	)
}

// ==============================================
const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
		padding: 50px min(50px, 1vw);
		display: flex;
		justify-content: center;
	`,
	paper: css`
		width: min(600px, 100vw);
		height: 100%;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.4);
		border: 2px solid ${ThemeColors.profIdea};
		box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
		border-radius: 20px;
		overflow: auto;
		display: grid;
		grid-template-rows: repeat(4, auto) 1fr;
		grid-gap: 30px;
		color: white;
	`,
	titleContainer: css`
		display: flex;
		align-items: center;
		grid-gap: 10px;
	`,
	logo: css`
		width: 80px;
		height: 80px;
	`,
	titleText: css`
		font-size: clamp(4rem, 4vw, 6rem);
	`,
	divider: css`
		width: 100%;
		height: 2px;
		background-color: white;
	`,
	detailContainer: css`
		display: flex;
		flex-direction: column;
		grid-gap: 10px;
	`,
	detailTitle: css`
		font-size: clamp(2rem, 2vw, 3rem);
	`,
	detailText: css`
		font-size: clamp(1.5rem, 1.5vw, 2rem);
		white-space: pre-line;
	`
}
