import { motion } from 'framer-motion';
import { useEffect, VFC } from 'react';
import { css } from '@emotion/react';
import { cardVariants } from '../../hooks/applicationAnimations';
import { ApplicationDetail } from '../../libs/types';
import { alphaColor } from '../../libs/utils';
import { ThemeColors } from '../../resources/themes';

type CardProps = {
	appDetail: ApplicationDetail
	setCardMount: React.Dispatch<React.SetStateAction<boolean>>
}

export const Card: VFC<CardProps> = ({ appDetail, setCardMount }) => {
	const { ogp, githubUrl, qiitaUrl } = appDetail

	useEffect(() => {
		return () => setCardMount(true)
	}, [])

	const imageClickHandler = () => {
		if (ogp.url) window.open(ogp.url, '_blank')
	}

	const githubClickHandler = () => {
		if (githubUrl) window.open(githubUrl, '_blank')
	}

	const qiitaClickHandler = () => {
		if (qiitaUrl) window.open(qiitaUrl, '_blank')
	}

	return (
		<div css={styles.container}>
			<motion.img
				css={styles.image}
				src={ogp.image}
				alt=""
				variants={cardVariants}
				initial="imageInit"
				animate="imageMount"
				exit="imageUnmount"
				onClick={imageClickHandler}
			/>
			<motion.div
				css={[styles.github, !githubUrl && styles.disabledLink]}
				variants={cardVariants}
				initial="githubInit"
				animate="githubMount"
				exit="githubUnmount"
				onClick={githubClickHandler}
			/>
			<motion.div
				css={[styles.qiita, !qiitaUrl && styles.disabledLink]}
				variants={cardVariants}
				initial="qiitaInit"
				animate="qiitaMount"
				exit="qiitaUnmount"
				onClick={qiitaClickHandler}
			/>
			<motion.div
				css={styles.title}
				variants={cardVariants}
				initial="titleInit"
				animate="titleMount"
				exit="titleUnmount">
				<div css={styles.titleText}>{ogp.title}</div>
				<div css={styles.descText}>{ogp.description}</div>
			</motion.div>
		</div>
	)
}

// ==============================================
// styles

const template = {
	flex: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`
}

const styles = {
	container: css`
		position: relative;
		width: min(100%, 1200px);
		height: 100%;
		overflow: hidden;
		/* border: 1px solid red; */
		${template.flex}
	`,
	image: css`
		width: min(90vw, 700px);
		height: min(90vw, 400px);
		box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.25);
		object-fit: cover;
		object-position: center;
		cursor: pointer;
	`,
	github: css`
		position: absolute;
		bottom: calc(50% + 150px);
		width: 300px;
		height: 80px;
		background-color: ${alphaColor(ThemeColors.github, 0.5)};
		box-shadow: 30px 30px 0px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(10px);
		transform: translate(calc(var(--mx) / -20), calc(var(--my) / -40));
		${template.flex}
		cursor: pointer;

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 70%;
			background-image: url('/assets/icons/github2.svg');
			background-size: contain;
			background-position: center;
		}

		@media (max-width: 500px) {
			position: absolute;
			width: 70px;
			height: 70px;
			border-radius: 50%;
			box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.25);
		}
	`,
	qiita: css`
		position: absolute;
		bottom: 50%;
		width: 300px;
		height: 80px;
		background-color: ${alphaColor(ThemeColors.qiita, 0.5)};
		box-shadow: 30px 30px 0px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(10px);
		transform: translate(calc(var(--mx) / 50), calc(var(--my) / -50));
		${template.flex}
		cursor: pointer;

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 60%;
			background-image: url('/assets/icons/qiita.svg');
			background-size: contain;
			background-position: center;
		}

		@media (max-width: 500px) {
			position: absolute;
			width: 70px;
			height: 70px;
			border-radius: 50%;
			box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.25);
		}
	`,
	disabledLink: css`
		background-color: rgba(70, 70, 70, 0.5);
		cursor: auto;
	`,
	title: css`
		position: absolute;
		top: calc(50% + 100px);
		width: min(80vw, 550px);
		height: 160px;
		background-color: ${alphaColor(ThemeColors.appTitleCard, 0.5)};
		box-shadow: 20px 20px 0px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(10px);
		transform: translate(calc(var(--mx) / -30), calc(var(--my) / 50));
		padding: 10px;
		display: flex;
		flex-direction: column;
		row-gap: 10px;
		overflow: hidden;
	`,
	titleText: css`
		font-size: 3rem;
	`,
	descText: css`
		font-size: 2rem;
	`
}
