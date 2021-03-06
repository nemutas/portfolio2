import React, { VFC } from 'react';
import { css } from '@emotion/react';

export const PlanetSVG: VFC = () => {
	return (
		<svg
			width="100%"
			height="100%"
			// viewBox="0 0 166 94"
			viewBox="-15 -20 200 150"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g css={styles.group}>
				<path
					d="M126.234 50.9982V51.2556C126.228 51.9021 126.209 52.5456 126.178 53.1862C125.621 64.1491 120.891 74.4836 112.959 82.0718C105.027 89.66 94.4924 93.9273 83.5151 93.9991C72.5378 94.0709 61.9487 89.9418 53.9179 82.458C45.8871 74.9742 41.0227 64.7024 40.3217 53.7478C40.2632 52.8381 40.2339 51.9216 40.2339 50.9982C40.2185 42.0926 42.9825 33.4041 48.1407 26.1441C48.5531 25.5591 48.9821 24.9848 49.4277 24.4213C49.7349 24.0293 50.0508 23.6462 50.3696 23.2659C57.6284 14.667 67.9685 9.25549 79.1715 8.19244C90.3745 7.12938 101.548 10.4995 110.295 17.5796C110.812 17.9979 111.321 18.4308 111.819 18.8725C112.216 19.2264 112.607 19.5882 112.992 19.9577C120.558 27.1946 125.215 36.9494 126.085 47.3829C126.184 48.5763 126.234 49.7814 126.234 50.9982Z"
					fill="#6C63FF"
				/>
				<path
					d="M93.0778 29.0769C95.8599 29.0769 98.1152 26.8216 98.1152 24.0396C98.1152 21.2575 95.8599 19.0023 93.0778 19.0023C90.2958 19.0023 88.0405 21.2575 88.0405 24.0396C88.0405 26.8216 90.2958 29.0769 93.0778 29.0769Z"
					fill="white"
				/>
				<path
					d="M66.7691 53.1426C71.4058 53.1426 75.1646 49.3838 75.1646 44.747C75.1646 40.1103 71.4058 36.3515 66.7691 36.3515C62.1323 36.3515 58.3735 40.1103 58.3735 44.747C58.3735 49.3838 62.1323 53.1426 66.7691 53.1426Z"
					fill="white"
				/>
				<path
					d="M83.0032 89.5246C85.7853 89.5246 88.0405 87.2693 88.0405 84.4873C88.0405 81.7052 85.7853 79.45 83.0032 79.45C80.2212 79.45 77.9659 81.7052 77.9659 84.4873C77.9659 87.2693 80.2212 89.5246 83.0032 89.5246Z"
					fill="white"
				/>
				<path
					id="planet-orbit1"
					d="M47.5 18.5C34.9838 14.6797 12.3018 4.29168 9.70412 10.2501C7.27626 15.819 44.2869 41.145 80.9099 57.1114C117.533 73.0778 155.777 80.5603 158.205 74.9914C159.702 71.5588 146.336 62.1805 129.26 52.5542"
					stroke="#CBCBCB"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				<path
					id="planet-orbit2"
					d="M37.4936 48.0407C24.5245 49.7877 2.04755 51.2155 2.17119 57.7143C2.28674 63.7884 46.487 71.3739 86.4318 70.614C126.377 69.854 164.257 60.707 164.142 54.6329C164.071 50.889 148.012 47.9385 128.477 46.3098"
					stroke="#CBCBCB"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				<AnimationCircle pathId="planet-orbit1" durSec={5} isReverse />
				<AnimationCircle pathId="planet-orbit2" durSec={10} />
			</g>
		</svg>
	)
}

type AnimationCircleProps = {
	pathId: string
	durSec?: number
	isReverse?: boolean
}

const AnimationCircle: VFC<AnimationCircleProps> = props => {
	const { pathId, durSec = 5, isReverse = false } = props

	return (
		<circle r="5" fill="#CBCBCB">
			<animateMotion
				dur={`${durSec}s`}
				repeatCount="indefinite"
				begin="3s;pause.end"
				keyPoints={isReverse ? '1;0' : '0;1'}
				keyTimes="0;1"
				calcMode="linear">
				<mpath xlinkHref={`#${pathId}`} />
			</animateMotion>
		</circle>
	)
}

const styles = {
	group: css`
		filter: drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.5));
	`
}
