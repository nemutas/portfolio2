import { atom } from 'recoil';

type StarCenterPosition = {
	top: number | undefined
	left: number | undefined
}

export const starCenterPosition = atom<StarCenterPosition>({
	key: 'star-center-position',
	default: { top: undefined, left: undefined }
})
