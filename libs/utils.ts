export const calcMaxLengthToScreenCorner = (x: number, y: number) => {
	const toTopLeftLength = Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2))
	const toBottomLeftLength = Math.sqrt(Math.pow(0 - x, 2) + Math.pow(window.innerHeight - y, 2))
	const toTopRightLength = Math.sqrt(Math.pow(window.innerWidth - x, 2) + Math.pow(0 - y, 2))
	const toBottomRightLength = Math.sqrt(
		Math.pow(window.innerWidth - x, 2) + Math.pow(window.innerHeight - y, 2)
	)
	return Math.max(toTopLeftLength, toBottomLeftLength, toTopRightLength, toBottomRightLength)
}
