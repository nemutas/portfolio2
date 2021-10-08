import React, { VFC } from 'react';
import { css } from '@emotion/react';

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
			</div>
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
		border: 2px solid #588133;
		box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
		border-radius: 20px;
		overflow: auto;
		display: grid;
		grid-template-rows: repeat(6, auto) 1fr;
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
	`
}
