import React, { VFC } from 'react';
import { css } from '@emotion/react';

type GithubSVGProps = {
	fill?: string
}

export const GithubSVG: VFC<GithubSVGProps> = props => {
	const { fill = '#1e1e1e' } = props

	return (
		<svg
			css={styles.octo}
			width="100%"
			height="100%"
			viewBox="0 0 34 41"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.8729 0.251343C5.13917 2.42872 4.88482 4.79196 5.54116 6.85595C4.74822 7.75445 4.13254 8.78652 3.69195 9.95466C2.51769 13.744 2.80452 18.5847 5.37532 21.5136C6.27841 22.5245 7.50365 23.3555 9.0455 24.007C10.5873 24.6584 12.569 25.074 14.9919 25.2538C13.3657 26.0296 12.2193 26.5036 11.8192 28.2191C10.0054 29.4567 7.7995 29.1614 6.20103 27.8156C4.93782 26.8738 4.36555 25.2002 2.96492 24.58C2.87684 24.4901 2.60167 24.4231 2.13912 24.3781C1.67656 24.3332 1.31297 24.4672 1.04864 24.7817C0.916477 24.9164 0.92621 25.0604 1.08039 25.2176C2.14071 26.0981 3.16127 27.0313 3.75893 28.1506C4.33163 29.3636 4.92438 30.2518 5.54107 30.8133C7.2519 31.9937 9.54632 32.6078 11.5546 31.8582C11.3204 33.3011 11.9522 35.5543 11.4875 36.845C11.3112 37.2044 11.0591 37.5195 10.7287 37.789C10.4343 38.0823 9.52126 38.4492 9.70532 38.8988C9.7934 39.1009 10.1013 39.225 10.6299 39.2699C11.7936 39.2396 12.952 38.7592 13.6366 37.8215C13.8789 37.4845 14.0001 37.0455 14.0001 36.5063V30.9828C14.0001 30.3538 14.131 29.9047 14.3953 29.6351C14.6596 29.3656 14.948 29.1845 15.2564 29.0947V36.373C15.2564 37.002 15.2007 37.5416 15.0906 37.9909C14.9804 38.4402 14.8822 38.7552 14.7942 38.9349C14.5919 39.2812 14.2053 39.6007 14.1977 40.0122C14.1977 40.1469 14.2765 40.224 14.4307 40.2464C15.5881 40.1952 16.9308 39.5019 17.4021 38.5276C17.7765 37.719 17.9632 36.868 17.9632 35.9694V28.8244H19.4172V35.9694C19.4172 36.868 19.6171 37.719 20.0136 38.5277C20.4101 39.3364 21.0718 39.8561 21.9969 40.0806C22.4815 40.2154 22.8088 40.2688 22.985 40.2464C23.1612 40.2239 23.24 40.1469 23.218 40.0121C23.1119 39.6039 22.8908 39.2547 22.6568 38.9348C22.3485 38.5305 22.1945 37.6759 22.1945 36.373V29.0947C22.5028 29.1845 22.801 29.3657 23.0873 29.6352C23.3736 29.9047 23.5143 30.3537 23.5143 30.9828V36.5064C23.5143 37.0455 23.6355 37.4846 23.8778 37.8215C24.6142 38.7777 25.7239 39.2628 26.8844 39.27C27.4131 39.2251 27.7209 39.101 27.809 38.8989C27.8971 38.6967 27.8317 38.5291 27.6114 38.3944C27.3911 38.2596 27.116 38.0587 26.7855 37.789C26.4551 37.5195 26.203 37.2044 26.0268 36.8451C25.829 34.5275 26.0218 32.0432 25.861 29.7C25.5435 27.1429 24.5795 26.3016 22.6566 25.3222C24.9474 25.1425 26.8309 24.7133 28.3066 24.0394C32.7181 21.851 33.938 18.4677 33.9566 13.9326C33.887 11.0139 33.0618 8.46773 31.1792 6.51734C31.4434 5.48404 31.5223 4.40849 31.4121 3.28531C31.302 2.16213 31.0693 1.14999 30.7169 0.251441C29.0871 0.341271 27.7211 0.676242 26.6197 1.26034C25.5184 1.84443 24.7257 2.34052 24.2412 2.74485C20.3376 1.84 16.1588 1.83459 12.4154 2.87817C10.5002 1.27849 8.12622 0.387318 5.8729 0.251343Z"
				fill={fill}
			/>
		</svg>
	)
}

const styles = {
	octo: css`
		filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
	`
}
