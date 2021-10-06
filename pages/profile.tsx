import anime from 'animejs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useRef, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { css, SerializedStyles } from '@emotion/react';
import { Layout } from '../components/layouts/Layout';
import { ProfileStar } from '../components/stars/ProfileStar';
import { starCenterPosition } from '../libs/store';

const Profile: VFC = () => {
	const [logoStartCenterPosition, setLogoStartCenterPosition] = useRecoilState(starCenterPosition)
	const router = useRouter()
	const containerRef = useRef<HTMLDivElement>(null)
	const logoRef = useRef<HTMLDivElement>(null)
	const skillRef = useRef<HTMLDivElement>(null)
	const careerRef = useRef<HTMLDivElement>(null)
	const ideaRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const rect = logoRef.current!.getBoundingClientRect()
		const isMoving = logoStartCenterPosition.top && logoStartCenterPosition.left

		if (isMoving) {
			// homeから移動してきたとき
			logoRef.current!.style.top = logoStartCenterPosition.top! - rect.height / 2 + 'px'
			logoRef.current!.style.left = logoStartCenterPosition.left! - rect.width / 2 + 'px'
		} else {
			// /profileを直接開いたとき（再読み込みしたとき）
			logoRef.current!.style.top = 50 + 'px'
			logoRef.current!.style.left = 50 + 'px'
		}

		const tl = anime.timeline({ duration: 500 })

		tl.add({
			targets: '#profile-logo',
			left: 50,
			top: 50,
			easing: 'easeInOutSine',
			delay: 200,
			duration: () => (isMoving ? 1000 : 1)
		})
			.add({
				targets: '#profile-skill',
				scale: [0, 1]
			})
			.add({
				targets: '#profile-career',
				scale: [0, 1]
			})
			.add({
				targets: '#profile-idea',
				scale: [0, 1]
			})

		tl.complete = () => setLogoStartCenterPosition({ top: undefined, left: undefined })
	}, [])

	const onLogoClickHandler = () => {
		router.push('/')
	}

	return (
		<Layout title="Profile｜Portforio">
			<motion.div ref={containerRef} css={styles.container}>
				{/* logo */}
				<DraggableLayout
					id="profile-logo"
					ownRef={logoRef}
					dragConstraintsRef={containerRef}
					style={[styles.logo]}
					clickHandler={onLogoClickHandler}>
					<ProfileStar />
				</DraggableLayout>
				{/* circle */}
				<CategoryCircle
					id="profile-skill"
					ownRef={skillRef}
					dragConstraintsRef={containerRef}
					text="Skill"
					style={styles.skill}
				/>
				<CategoryCircle
					id="profile-career"
					ownRef={careerRef}
					dragConstraintsRef={containerRef}
					text="Career"
					style={styles.career}
				/>
				<CategoryCircle
					id="profile-idea"
					ownRef={ideaRef}
					dragConstraintsRef={containerRef}
					text="Idea"
					style={styles.idea}
				/>
			</motion.div>
		</Layout>
	)
}
export default Profile

// ==============================================
type CategoryCircleProps = {
	id: string
	ownRef: React.RefObject<HTMLDivElement>
	dragConstraintsRef: React.RefObject<HTMLDivElement>
	text: string
	style: SerializedStyles
}

const CategoryCircle: VFC<CategoryCircleProps> = memo(props => {
	const { text, style, ...params } = props

	return (
		<DraggableLayout style={[styles.circle, style]} {...params}>
			{text}
		</DraggableLayout>
	)
})

// ==============================================
type DraggableLayoutProps = {
	id: string
	ownRef: React.RefObject<HTMLDivElement>
	dragConstraintsRef: React.RefObject<HTMLDivElement>
	style: SerializedStyles[]
	clickHandler?: () => void
	children: React.ReactNode
}

const DraggableLayout: VFC<DraggableLayoutProps> = props => {
	const { id, ownRef, dragConstraintsRef, style, clickHandler, children } = props
	const enabledClickRef = useRef(true)

	const dragEndHandler = () => {
		// drag終了直後は、clickイベントを発生させない
		enabledClickRef.current = false
		setTimeout(() => {
			enabledClickRef.current = true
		}, 100)
	}

	const motionDivClickHandler = () => {
		if (enabledClickRef.current && clickHandler) {
			clickHandler()
		}
	}

	return (
		<motion.div
			id={id}
			ref={ownRef}
			css={style}
			drag
			dragPropagation
			dragConstraints={dragConstraintsRef}
			onDragEnd={dragEndHandler}
			onClick={motionDivClickHandler}>
			{children}
		</motion.div>
	)
}

// ==============================================
const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
		padding: 5em;
		background-color: #f6d04d;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	logo: css`
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #f6d04d;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 1;
	`,
	circle: css`
		position: absolute;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
		color: white;
		font-size: 3rem;
		cursor: pointer;
		transform: scale(0);
		z-index: 2;
	`,
	skill: css`
		bottom: 10%;
		left: 30%;
		background-color: #2694ab;
	`,
	career: css`
		top: 10%;
		right: 40%;
		background-color: #de4307;
	`,
	idea: css`
		bottom: 40%;
		right: 10%;
		background-color: #588133;
	`
}
