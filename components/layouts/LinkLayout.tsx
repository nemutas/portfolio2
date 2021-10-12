import Link from 'next/link';
import { ReactNode, VFC } from 'react';

type LinkLayoutProps = {
	href: string
	children: ReactNode
	isOuterLink?: boolean
}

export const LinkLayout: VFC<LinkLayoutProps> = props => {
	const { href, children, isOuterLink = false } = props
	return (
		<Link href={href}>
			{isOuterLink ? (
				<a target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			) : (
				<a>{children}</a>
			)}
		</Link>
	)
}
