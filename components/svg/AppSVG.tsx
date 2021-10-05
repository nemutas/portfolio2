import React, { VFC } from 'react';

type AppSVGProps = {
	fill?: string
}

export const AppSVG: VFC<AppSVGProps> = props => {
	const { fill = '#fff' } = props

	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 71 71"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M35.9985 39.7848H14.1235C12.9632 39.7848 11.8504 39.3239 11.0299 38.5034C10.2094 37.6829 9.7485 36.5701 9.7485 35.4098V13.5348C9.7485 12.3745 10.2094 11.2617 11.0299 10.4412C11.8504 9.62075 12.9632 9.15981 14.1235 9.15981H35.9985C37.1588 9.15981 38.2716 9.62075 39.0921 10.4412C39.9126 11.2617 40.3735 12.3745 40.3735 13.5348V35.4098C40.3735 36.5701 39.9126 37.6829 39.0921 38.5034C38.2716 39.3239 37.1588 39.7848 35.9985 39.7848ZM14.1235 13.5348V35.4098H35.9985V13.5348H14.1235Z"
				fill={fill}
			/>
			<path
				d="M57.8735 26.6598V35.4098H49.1235V26.6598H57.8735ZM57.8735 22.2848H49.1235C47.9632 22.2848 46.8504 22.7457 46.0299 23.5662C45.2094 24.3867 44.7485 25.4995 44.7485 26.6598V35.4098C44.7485 36.5701 45.2094 37.6829 46.0299 38.5034C46.8504 39.3239 47.9632 39.7848 49.1235 39.7848H57.8735C59.0338 39.7848 60.1466 39.3239 60.9671 38.5034C61.7876 37.6829 62.2485 36.5701 62.2485 35.4098V26.6598C62.2485 25.4995 61.7876 24.3867 60.9671 23.5662C60.1466 22.7457 59.0338 22.2848 57.8735 22.2848Z"
				fill={fill}
			/>
			<path
				d="M57.8735 48.5348V57.2848H49.1235V48.5348H57.8735ZM57.8735 44.1598H49.1235C47.9632 44.1598 46.8504 44.6208 46.0299 45.4412C45.2094 46.2617 44.7485 47.3745 44.7485 48.5348V57.2848C44.7485 58.4451 45.2094 59.5579 46.0299 60.3784C46.8504 61.1989 47.9632 61.6598 49.1235 61.6598H57.8735C59.0338 61.6598 60.1466 61.1989 60.9671 60.3784C61.7876 59.5579 62.2485 58.4451 62.2485 57.2848V48.5348C62.2485 47.3745 61.7876 46.2617 60.9671 45.4412C60.1466 44.6208 59.0338 44.1598 57.8735 44.1598Z"
				fill={fill}
			/>
			<path
				d="M35.9985 48.5348V57.2848H27.2485V48.5348H35.9985ZM35.9985 44.1598H27.2485C26.0882 44.1598 24.9754 44.6208 24.1549 45.4412C23.3344 46.2617 22.8735 47.3745 22.8735 48.5348V57.2848C22.8735 58.4451 23.3344 59.5579 24.1549 60.3784C24.9754 61.1989 26.0882 61.6598 27.2485 61.6598H35.9985C37.1588 61.6598 38.2716 61.1989 39.0921 60.3784C39.9126 59.5579 40.3735 58.4451 40.3735 57.2848V48.5348C40.3735 47.3745 39.9126 46.2617 39.0921 45.4412C38.2716 44.6208 37.1588 44.1598 35.9985 44.1598Z"
				fill={fill}
			/>
		</svg>
	)
}