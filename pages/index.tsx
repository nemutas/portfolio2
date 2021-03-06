import { motion } from 'framer-motion';
import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { Background } from '../components/Background';
import { Layout } from '../components/layouts/Layout';
import { Objects } from '../components/objects/Objects';
import { Stars } from '../components/stars/Stars';

const Home: VFC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const mapRef = useRef<HTMLDivElement>(null)

	return (
		<Layout>
			{/* body */}
			<motion.div ref={containerRef} css={styles.container}>
				{/* background */}
				{/* <BackgroundParticles /> */}
				<Background />
				<motion.div
					ref={mapRef}
					css={styles.map}
					drag
					dragPropagation
					dragConstraints={containerRef}>
					{/* objects */}
					<Objects />
					{/* link starts */}
					<Stars />
				</motion.div>
			</motion.div>
		</Layout>
	)
}
export default Home

// ==============================================
// styles

const styles = {
	container: css`
		position: relative;
		width: 300vw;
		height: 300vh;
		/* (300 - 100) / 2 */
		transform: translate(-100vw, -100vh);
		background-color: #1e1e1e;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	map: css`
		position: absolute;
		width: 200vw;
		height: 200vh;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 2px solid #44b3c2; */
	`,
	text: css`
		font-size: 5rem;
		color: white;
	`
}
