import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { Astronout } from './Astronout';
import { Astronout2 } from './Astronout2';
import { Earth } from './Earth';
import { LinkPath } from './LinkPath';
import { Planet } from './Planet';
import { Planet2 } from './Planet2';
import { Rocket } from './Rocket';

export const Objects: VFC = () => {
	const astronoutRef = useRef<HTMLDivElement>(null)
	const rocketRef = useRef<HTMLDivElement>(null)

	return (
		<>
			<div css={styles.planet}>
				<Planet />
			</div>
			<div css={styles.planet2}>
				<Planet2 />
			</div>
			<div css={styles.earth}>
				<Earth />
			</div>
			<div ref={astronoutRef} css={styles.astronout}>
				<Astronout />
			</div>
			<div css={styles.astronout2}>
				<Astronout2 />
			</div>
			<div ref={rocketRef} css={styles.rocket}>
				<Rocket />
			</div>
			<LinkPath startRef={rocketRef} endRef={astronoutRef} color={'#fff'} />
		</>
	)
}

const styles = {
	planet: css`
		position: absolute;
		right: 5%;
	`,
	planet2: css`
		position: absolute;
		top: 10%;
		left: 45%;
	`,
	earth: css`
		position: absolute;
		bottom: 10%;
		left: 35%;
	`,
	astronout: css`
		position: absolute;
		bottom: 40%;
		left: 15%;
	`,
	astronout2: css`
		position: absolute;
		top: 30%;
		right: 20%;
	`,
	rocket: css`
		position: absolute;
		left: 5%;
	`
}
