import { useRouter } from 'next/router';
import React, { useRef, VFC } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { Layout } from '../components/layouts/Layout';
import { Career } from '../components/profilePages/Career';
import { Idea } from '../components/profilePages/Idea';
import { Skill } from '../components/profilePages/Skill';
import { ProfileStar } from '../components/stars/ProfileStar';
import { useProfileMountAnimation, useProfileUnmountAnimation } from '../hooks/profileAnimations';
import { lightColor } from '../libs/utils';
import { ThemeColors } from '../resources/themes';

const Profile: VFC = () => {
	const router = useRouter()
	const logoRef = useRef<HTMLDivElement>(null)

	// mount時のアニメーション
	useProfileMountAnimation(logoRef)

	/** logoをクリックしたとき（アニメーション実行後、homeへ戻る） */
	const logoClickHandler = () => {
		// unmount時のアニメーション
		useProfileUnmountAnimation(logoRef)

		setTimeout(() => {
			router.push('/')
		}, 2200)
	}

	return (
		<Layout title="Profile｜Portforio">
			<div css={styles.container}>
				<div id="profile-logo" ref={logoRef} css={styles.logo} onClick={logoClickHandler}>
					<ProfileStar />
				</div>
				<div id="profile-contents" css={styles.contents}>
					<ProfileText />
					<CategoryLayout
						id="profile-skill"
						buttonStyle={styles.skillButton}
						sheetStyle={styles.skillSheet}>
						<Skill />
					</CategoryLayout>
					<CategoryLayout
						id="profile-career"
						buttonStyle={styles.careerButton}
						sheetStyle={styles.careerSheet}>
						<Career />
					</CategoryLayout>
					<CategoryLayout
						id="profile-idea"
						buttonStyle={styles.ideaButton}
						sheetStyle={styles.ideaSheet}>
						<Idea />
					</CategoryLayout>
				</div>
			</div>
		</Layout>
	)
}
export default Profile

// ==============================================
const ProfileText: VFC = () => {
	return (
		<div css={styles.textContainer}>
			<div id="profile-text-main" css={styles.mainText}>
				Hi. I am <span style={{ color: ThemeColors.name }}>Nemutas</span>.
			</div>
			<div id="profile-text-line" css={styles.textLine} />
			<div id="profile-text-sub" css={styles.subText}>
				Web Frontend Engineer
			</div>
		</div>
	)
}

// ==============================================
type CategoryLayout = {
	id: string
	buttonStyle: SerializedStyles
	sheetStyle: SerializedStyles
	children: React.ReactNode
}

const CategoryLayout: VFC<CategoryLayout> = props => {
	const { id, buttonStyle, sheetStyle, children } = props
	const buttonRef = useRef<HTMLDivElement>(null)
	const sheetRef = useRef<HTMLDivElement>(null)
	const paperRef = useRef<HTMLDivElement>(null)

	const categoryClickHandler = () => {
		buttonRef.current!.classList.toggle('active')
		sheetRef.current!.classList.toggle('active')
		paperRef.current!.classList.toggle('active')
	}

	return (
		<>
			<div id={`${id}-sheet`} ref={sheetRef} css={[styles.spreadSheet, sheetStyle]}>
				<div ref={paperRef} css={styles.paper}>
					{children}
				</div>
			</div>
			<div
				id={`${id}-button`}
				ref={buttonRef}
				css={[styles.categoryButton, buttonStyle]}
				onClick={categoryClickHandler}
			/>
		</>
	)
}

// ==============================================
const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #1e1e1e;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	contents: css`
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: ${ThemeColors.profile};
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	`,
	logo: css`
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: ${ThemeColors.profile};
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 1;
	`,
	categoryButton: css`
		position: absolute;
		width: 100px;
		height: 100px;
		cursor: pointer;
		transform: scale(0);
		transition: 0.2s linear;

		&.active {
			width: 90px;
			height: 90px;
			z-index: 5;
			background-image: url('/assets/close.svg');
		}
	`,
	spreadSheet: css`
		position: absolute;
		width: 90px;
		height: 90px;
		overflow: hidden;
		transform: scale(0);
		transition: 1.2s;

		&.active {
			width: 100%;
			height: 100%;
			border-radius: 0;
			z-index: 2;
			transition: 0.8s;
		}
	`,
	skillButton: css`
		bottom: 0;
		left: 0;
		border-top-right-radius: 100%;
		background-color: ${ThemeColors.profSkill};
		box-shadow: 5px -5px 10px 10px rgba(0, 0, 0, 0.2);
		transform-origin: bottom left;
		/* icon */
		background-image: url('/assets/skill.svg');
		background-size: 50px 50px;
		background-position: bottom 10px left 10px;

		&.active {
			background-color: ${lightColor(ThemeColors.profSkill, 0.05)};
			box-shadow: 2px -2px 5px 5px rgba(0, 0, 0, 0.2);
			background-position: bottom 5px left 5px;
		}
	`,
	skillSheet: css`
		bottom: 0;
		left: 0;
		border-top-right-radius: 100%;
		background-color: ${ThemeColors.profSkill};
		transform-origin: bottom left;
	`,
	careerButton: css`
		top: 0;
		right: 0;
		border-bottom-left-radius: 100%;
		background-color: ${ThemeColors.profCareer};
		box-shadow: -5px 5px 10px 10px rgba(0, 0, 0, 0.2);
		transform-origin: top right;
		/* icon */
		background-image: url('/assets/career.svg');
		background-size: 50px 50px;
		background-position: top 10px right 10px;

		&.active {
			background-color: ${lightColor(ThemeColors.profCareer, 0.05)};
			box-shadow: -2px 2px 5px 5px rgba(0, 0, 0, 0.2);
			background-position: top 5px right 5px;
		}
	`,
	careerSheet: css`
		top: 0;
		right: 0;
		border-bottom-left-radius: 100%;
		background-color: ${ThemeColors.profCareer};
		transform-origin: top right;
	`,
	ideaButton: css`
		bottom: 0;
		right: 0;
		border-top-left-radius: 100%;
		background-color: ${ThemeColors.profIdea};
		box-shadow: -5px -5px 10px 10px rgba(0, 0, 0, 0.2);
		transform-origin: bottom right;
		/* icon */
		background-image: url('/assets/idea.svg');
		background-size: 50px 50px;
		background-position: bottom 10px right 10px;

		&.active {
			background-color: ${lightColor(ThemeColors.profIdea, 0.05)};
			box-shadow: -2px -2px 5px 5px rgba(0, 0, 0, 0.2);
			background-position: bottom 5px right 5px;
		}
	`,
	ideaSheet: css`
		bottom: 0;
		right: 0;
		border-top-left-radius: 100%;
		background-color: ${ThemeColors.profIdea};
		transform-origin: bottom right;
	`,
	paper: css`
		position: relative;
		width: 100%;
		height: 100%;
		transform: translateY(100%);
		transition: transform 0.5s;

		&.active {
			transform: translateY(0);
			transition-delay: 1s;
		}
	`,
	textContainer: css`
		position: relative;
		display: grid;
		grid-template-rows: auto auto auto;
	`,
	mainText: css`
		font-size: max(5vw, 3rem);
		color: ${ThemeColors.dark};
		padding-right: max(5vw, 10px);
	`,
	subText: css`
		font-size: max(3vw, 2rem);
		color: ${ThemeColors.dark};
		padding-right: 50px;
	`,
	textLine: css`
		width: 100%;
		height: max(0.3vw, 2px);
		background-color: ${ThemeColors.dark};
	`
}
