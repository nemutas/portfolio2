import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { CareerDetail, careers } from '../../resources/career';
import { ThemeColors } from '../../resources/themes';

export const Career: VFC = () => {
	return (
		<div css={styles.container}>
			<div css={styles.paper}>
				{/* row 1 */}
				<div css={styles.titleContainer}>
					<img css={styles.logo} src="/assets/career.svg" alt="" />
					<div css={styles.titleText}>Career</div>
				</div>
				{/* row 2 */}
				<div css={styles.divider} />
				{/* row 3 - 6 */}
				{careers.map((detail, i) => (
					<Detail key={i} detail={detail} />
				))}
			</div>
		</div>
	)
}

// ==============================================
type DetailProps = {
	detail: CareerDetail
}

const Detail: VFC<DetailProps> = ({ detail }) => {
	return (
		<div css={styles.detailContainer}>
			{/* title */}
			<div css={styles.detailTitleContainer}>
				{/* icon */}
				<img src={`/assets/icons/${detail.iconName}.svg`} width="70px" alt="" />
				{/* date-title */}
				<div css={styles.detailDateTitleContainer}>
					<div css={styles.date}>{detail.date}</div>
					<div css={styles.detailTitle}>{detail.title}</div>
				</div>
			</div>
			{/* description */}
			{detail.description && <div css={styles.description}>{detail.description}</div>}
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
		border: 2px solid ${ThemeColors.profCareer};
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
	`,
	detailContainer: css`
		width: 100%;
		display: grid;
		grid-template-rows: auto auto;
		grid-gap: 10px;
	`,
	detailTitleContainer: css`
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 15px;
	`,
	detailDateTitleContainer: css`
		width: 100%;
		display: flex;
		flex-direction: column;
	`,
	date: css`
		font-size: 1.5rem;
	`,
	detailTitle: css`
		font-size: clamp(2rem, 2vw, 3rem);
	`,
	description: css`
		font-size: clamp(1.5rem, 1.5vw, 2rem);
	`
}
