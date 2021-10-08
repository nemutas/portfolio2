import { atom } from 'recoil';

type StarCenterPosition = {
	x: number | undefined
	y: number | undefined
}

export const starCenterPosition = atom<StarCenterPosition>({
	key: 'star-center-position',
	default: { x: undefined, y: undefined }
})
