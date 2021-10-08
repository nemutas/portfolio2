import anime from 'animejs';
import { color } from 'csx';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useRef, useState, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { css, SerializedStyles } from '@emotion/react';
import { Layout } from '../components/layouts/Layout';
import { Career } from '../components/profilePages/Career';
import { Idea } from '../components/profilePages/Idea';
import { Skill } from '../components/profilePages/Skill';
import { ProfileStar } from '../components/stars/ProfileStar';
import { starCenterPosition } from '../libs/store';

const Profile: VFC = () => {
	const [logoStartCenterPosition, setLogoStartCenterPosition] = useRecoilState(starCenterPosition)
	const router = useRouter()
	const logoRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		const isMoving = logoStartCenterPosition.x && logoStartCenterPosition.y

		if (isMoving) {
			logoRef.current!.style.top = `${logoStartCenterPosition.y}px`
			logoRef.current!.style.left = `${logoStartCenterPosition.x}px`
		}

		const tl = anime.timeline({
			duration: 200
		})
		tl.add({
			targets: '#profile-logo',
			boxShadow: '0 0 10px 15px rgba(0, 0, 0, 0.2)',
			delay: 200
		})
			.add({
				targets: '#profile-logo',
				top: 0,
				left: 0,
				easing: 'easeInOutSine',
				duration: () => (isMoving ? 1000 : 0),
				delay: () => (isMoving ? 200 : 0)
			})
			.add({
				targets: '#profile-text-line',
				width: ['0%', '100%'],
				easing: 'easeOutQuint',
				duration: 2000
			})
			.add({
				targets: '#profile-text-main',
				translateY: [100, 0],
				opacity: [0, 1],
				duration: 1500
			})
			.add({
				targets: '#profile-text-sub',
				translateY: [-100, 0],
				opacity: [0, 1],
				duration: 1000
			})
			.add({
				targets: [
					'#profile-skill-button',
					'#profile-career-button',
					'#profile-idea-button',
					'#profile-skill-sheet',
					'#profile-career-sheet',
					'#profile-idea-sheet'
				],
				scale: [0, 1]
			})
		tl.complete = () => setLogoStartCenterPosition({ x: undefined, y: undefined })
	}, [])

	/** logoをクリックしたとき（アニメーション実行後、homeへ戻る） */
	const logoClickHandler = () => {
		const rect = logoRef.current!.getBoundingClientRect()
		logoRef.current!.style.zIndex = '10'
		anime({
			targets: '#profile-logo',
			translateX: window.innerWidth / 2 - rect.width / 2,
			translateY: window.innerHeight / 2 - rect.height / 2,
			easing: 'easeInOutSine',
			duration: 1000
		})

		setTimeout(() => {
			router.push('/')
		}, 1200)
	}

	return (
		<Layout title="Profile｜Portforio">
			<div css={styles.container}>
				<ProfileText />
				<div id="profile-logo" ref={logoRef} css={styles.logo} onClick={logoClickHandler}>
					<ProfileStar />
				</div>
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
		</Layout>
	)
}
export default Profile

// ==============================================
const ProfileText: VFC = () => {
	return (
		<div css={styles.textContainer}>
			<div id="profile-text-main" css={styles.mainText}>
				Hi. I am <span style={{ color: '#db0063' }}>Nemutas</span>.
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
		background-color: #f6d04d;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	logo: css`
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #f6d04d;
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
		transition: 0.8s;

		&.active {
			width: 100%;
			height: 100%;
			border-radius: 0;
			z-index: 2;
		}
	`,
	skillButton: css`
		bottom: 0;
		left: 0;
		border-top-right-radius: 100%;
		background-color: #2694ab;
		box-shadow: 5px -5px 10px 10px rgba(0, 0, 0, 0.2);
		transform-origin: bottom left;
		/* icon */
		background-image: url('/assets/skill.svg');
		background-size: 50px 50px;
		background-position: bottom 10px left 10px;

		&.active {
			background-color: ${color('#2694ab').lighten(0.05).toString()};
			box-shadow: 2px -2px 5px 5px rgba(0, 0, 0, 0.2);
			background-position: bottom 5px left 5px;
		}
	`,
	skillSheet: css`
		bottom: 0;
		left: 0;
		border-top-right-radius: 100%;
		background-color: #2694ab;
		transform-origin: bottom left;
	`,
	careerButton: css`
		top: 0;
		right: 0;
		border-bottom-left-radius: 100%;
		background-color: #de4307;
		box-shadow: -5px 5px 10px 10px rgba(0, 0, 0, 0.2);
		transform-origin: top right;
		/* icon */
		background-image: url('/assets/career.svg');
		background-size: 50px 50px;
		background-position: top 10px right 10px;

		&.active {
			background-color: ${color('#de4307').lighten(0.05).toString()};
			box-shadow: -2px 2px 5px 5px rgba(0, 0, 0, 0.2);
			background-position: top 5px right 5px;
		}
	`,
	careerSheet: css`
		top: 0;
		right: 0;
		border-bottom-left-radius: 100%;
		background-color: #de4307;
		transform-origin: top right;
	`,
	ideaButton: css`
		bottom: 0;
		right: 0;
		border-top-left-radius: 100%;
		background-color: #588133;
		box-shadow: -5px -5px 10px 10px rgba(0, 0, 0, 0.2);
		transform-origin: bottom right;
		/* icon */
		background-image: url('/assets/idea.svg');
		background-size: 50px 50px;
		background-position: bottom 10px right 10px;

		&.active {
			background-color: ${color('#588133').lighten(0.05).toString()};
			box-shadow: -2px -2px 5px 5px rgba(0, 0, 0, 0.2);
			background-position: bottom 5px right 5px;
		}
	`,
	ideaSheet: css`
		bottom: 0;
		right: 0;
		border-top-left-radius: 100%;
		background-color: #588133;
		transform-origin: bottom right;
	`,
	paper: css`
		position: relative;
		width: 100%;
		height: 100%;
	`,
	textContainer: css`
		position: relative;
		display: grid;
		grid-template-rows: auto auto auto;
	`,
	mainText: css`
		font-size: max(5vw, 3rem);
		color: #1e1e1e;
		padding-right: max(5vw, 10px);
	`,
	subText: css`
		font-size: max(3vw, 2rem);
		color: #1e1e1e;
		padding-right: 50px;
	`,
	textLine: css`
		width: 100%;
		height: max(0.3vw, 2px);
		background-color: #1e1e1e;
	`
}
