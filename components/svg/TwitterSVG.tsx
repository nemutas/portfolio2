import React, { VFC } from 'react';

type TwitterSVGProps = {
	fill?: string
}

export const TwitterSVG: VFC<TwitterSVGProps> = props => {
	const { fill = '#fff' } = props

	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 58 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M57.1075 6.34251C55.02 7.26751 52.7775 7.89251 50.42 8.17501C52.8525 6.71949 54.6724 4.42868 55.54 1.73001C53.2546 3.08748 50.7534 4.043 48.145 4.55501C46.3909 2.68217 44.0677 1.44082 41.5358 1.02369C39.004 0.606564 36.4052 1.03699 34.1431 2.24814C31.8809 3.4593 30.0819 5.38341 29.0254 7.72177C27.9688 10.0601 27.7138 12.6819 28.3 15.18C23.6692 14.9475 19.1391 13.7439 15.0036 11.6473C10.8681 9.55066 7.2196 6.60791 4.295 3.01001C3.295 4.73501 2.72 6.73501 2.72 8.86501C2.71888 10.7825 3.19108 12.6706 4.0947 14.3618C4.99831 16.0531 6.3054 17.4951 7.9 18.56C6.05069 18.5012 4.24218 18.0015 2.625 17.1025V17.2525C2.62481 19.9419 3.55508 22.5485 5.25796 24.63C6.96083 26.7115 9.33143 28.1398 11.9675 28.6725C10.252 29.1368 8.45334 29.2052 6.7075 28.8725C7.45124 31.1865 8.89999 33.2101 10.8509 34.6598C12.8018 36.1096 15.1573 36.913 17.5875 36.9575C13.4621 40.196 8.36722 41.9527 3.1225 41.945C2.19345 41.9453 1.26519 41.891 0.342499 41.7825C5.66619 45.2055 11.8633 47.0221 18.1925 47.015C39.6175 47.015 51.33 29.27 51.33 13.88C51.33 13.38 51.3175 12.875 51.295 12.375C53.5732 10.7274 55.5398 8.68725 57.1025 6.35001L57.1075 6.34251Z"
				fill={fill}
			/>
		</svg>
	)
}
