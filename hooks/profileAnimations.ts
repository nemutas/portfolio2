import anime from 'animejs';
import { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { starCenterPosition } from '../libs/store';

export const useProfileMountAnimation = (logoRef: React.RefObject<HTMLDivElement>) => {
	const [logoStartCenterPosition, setLogoStartCenterPosition] = useRecoilState(starCenterPosition)

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
}

export const useProfileUnmountAnimation = (logoRef: React.RefObject<HTMLDivElement>) => {
	const rect = logoRef.current!.getBoundingClientRect()
	logoRef.current!.style.zIndex = '10'
	const tl = anime.timeline({ easing: 'easeInOutSine', duration: 1000 })
	tl.add({
		targets: '#profile-logo',
		translateX: window.innerWidth / 2 - rect.width / 2,
		translateY: window.innerHeight / 2 - rect.height / 2
	}).add({
		targets: '#profile-contents',
		scale: [1, 0],
		borderRadius: '50%'
	})
}
