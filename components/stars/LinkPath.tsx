// https://stackoverflow.com/questions/67138611/next-js-with-react-xarrows-gives-error-referenceerror-element-is-not-defined
import dynamic from 'next/dynamic';
import { VFC } from 'react';

const Xarrow = dynamic(() => import('react-xarrows'), {
	ssr: false
})

type LinkPathProps = {
	startRef: React.RefObject<HTMLDivElement>
	endRef: React.RefObject<HTMLDivElement>
	color: string
}

export const LinkPath: VFC<LinkPathProps> = props => {
	const { startRef, endRef, color } = props

	return (
		<Xarrow
			start={startRef}
			end={endRef}
			color={color}
			strokeWidth={2}
			startAnchor="middle"
			endAnchor="middle"
			showHead={false}
			showTail={false}
			dashness={{ strokeLen: 30, nonStrokeLen: 20, animation: 1 }}
			zIndex={-1}
		/>
	)
}
