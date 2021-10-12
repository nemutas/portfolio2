import anime from 'animejs';
import { Variants } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { starCenterPosition } from '../libs/store';

export const useApplicationMountAnimation = (
	logoRef: React.RefObject<HTMLDivElement>,
	setCardMount: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const [logoStartCenterPosition, setLogoStartCenterPosition] = useRecoilState(starCenterPosition)

	useLayoutEffect(() => {
		const isMoving = logoStartCenterPosition.x && logoStartCenterPosition.y

		if (isMoving) {
			logoRef.current!.style.top = `${logoStartCenterPosition.y! - 100}px`
			logoRef.current!.style.left = `${logoStartCenterPosition.x! - 100}px`
		}

		const tl = anime.timeline({
			duration: 200
		})
		tl.add({
			targets: '#app-logo',
			boxShadow: '0 0 10px 15px rgba(0, 0, 0, 0.2)',
			delay: 200
		})
			.add({
				targets: '#app-logo',
				top: -100,
				left: -100,
				easing: 'easeInOutSine',
				duration: () => (isMoving ? 1000 : 0),
				delay: () => (isMoving ? 200 : 0)
			})
			.add({
				targets: '#app-title',
				translateX: ['-150%', 0],
				easing: 'easeInOutSine',
				duration: 1500
			})
			.add({
				targets: '#app-divider',
				width: [0, '100%'],
				easing: 'easeInOutSine',
				duration: 500
			})
			.add({
				targets: '#app-background',
				scale: [0, 1],
				easing: 'easeInOutSine',
				duration: 1000
			})
			.add({
				targets: '#app-nav',
				opacity: [0, 1],
				easing: 'easeInOutSine',
				duration: 500
			})
		tl.complete = () => {
			setLogoStartCenterPosition({ x: undefined, y: undefined })
			setCardMount(true)
		}
	}, [])
}

export const useApplicationUnmountAnimation = (logoRef: React.RefObject<HTMLDivElement>) => {
	// const rect = logoRef.current!.getBoundingClientRect()

	const tl = anime.timeline({ duration: 1000 })
	tl.add({
		targets: '#app-contents',
		scale: [1, 0],
		borderBottomRightRadius: '100%',
		easing: 'easeInOutSine'
	}).add({
		targets: '#app-logo',
		top: -200,
		left: -200
	})
}

// ==============================================
// card animation
const cardTransitions = {
	mount: {
		duration: 1,
		delayDelta: 0.5
	},
	unmount: {
		duration: 0.5,
		delayDelta: 0.3
	}
}

export const cardVariants: Variants = {
	imageInit: {
		opacity: 0,
		y: '100%'
	},
	imageMount: {
		opacity: 1,
		y: 0,
		transition: {
			duration: cardTransitions.mount.duration
		}
	},
	imageUnmount: {
		opacity: 0,
		y: '100%',
		transition: {
			duration: cardTransitions.unmount.duration,
			delay: cardTransitions.unmount.delayDelta * 3
		}
	},
	githubInit: {
		opacity: 0,
		right: 0
	},
	githubMount: {
		opacity: 1,
		right: '15%',
		transition: {
			duration: cardTransitions.mount.duration,
			delay: cardTransitions.mount.delayDelta
		}
	},
	githubUnmount: {
		opacity: 0,
		right: 0,
		transition: {
			duration: cardTransitions.unmount.duration,
			delay: cardTransitions.unmount.delayDelta * 2
		}
	},
	qiitaInit: {
		opacity: 0,
		left: 0
	},
	qiitaMount: {
		opacity: 1,
		left: '10%',
		transition: {
			duration: cardTransitions.mount.duration,
			delay: cardTransitions.mount.delayDelta * 2
		}
	},
	qiitaUnmount: {
		opacity: 0,
		left: 0,
		transition: {
			duration: cardTransitions.unmount.duration,
			delay: cardTransitions.unmount.delayDelta
		}
	},
	titleInit: {
		opacity: 0,
		right: 0
	},
	titleMount: {
		opacity: 1,
		right: '15%',
		transition: {
			duration: cardTransitions.mount.duration,
			delay: cardTransitions.mount.delayDelta * 3
		}
	},
	titleUnmount: {
		opacity: 0,
		right: 0,
		transition: {
			duration: cardTransitions.unmount.duration
		}
	}
}
