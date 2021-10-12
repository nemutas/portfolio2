// https://zenn.dev/littleforest/articles/scrape-og-tags

import axios from 'axios';
import { JSDOM } from 'jsdom';
import { ApplicationDetail, ApplicationUrl, OGP } from '../libs/types';

export const getApplicationDetails = async (urls: ApplicationUrl[]) => {
	// 配列に格納されている順に順番をつける
	const numberedUrls = urls.map((url, i) => {
		return { order: i, ...url }
	})
	// OGPを取得する（非同期なので順番が保証されない）
	const numberedDetailes: { order: number; detail: ApplicationDetail }[] = []
	await Promise.all(
		numberedUrls.map(async url => {
			const ogp = await getOGP(url.app)
			if (ogp.title) {
				numberedDetailes.push({
					order: url.order,
					detail: {
						ogp,
						githubUrl: url.github ? url.github : null,
						qiitaUrl: url.qiita ? url.qiita : null
					}
				})
			}
		})
	)
	// 最初の格納順に並べ替えたdetailesを取得する
	const detailes = numberedDetailes
		.sort((a, b) => a.order - b.order)
		.map(orderedDetail => orderedDetail.detail)
	return detailes
}

const getOGP = async (url: string) => {
	let ogp: OGP = {}
	try {
		const res = await axios.get(url)
		const html = res.data
		const dom = new JSDOM(html)
		const meta = dom.window.document.head.querySelectorAll('meta')
		ogp = extractOgp(Array.from(meta))
	} catch (e) {
		console.log(e)
	}
	return ogp
}

const extractOgp = (metaElements: HTMLMetaElement[]): OGP => {
	const strOgp = metaElements
		.filter((element: Element) => element.hasAttribute('property'))
		.reduce((previous: any, current: Element) => {
			const property = current.getAttribute('property')?.trim()
			if (!property) return
			const content = current.getAttribute('content')
			previous[property] = content
			return previous
		}, {}) as { [key: string]: string }

	// convert object
	const ogp: OGP = {}
	Object.keys(strOgp).forEach(key => {
		if (key === 'og:type') ogp.type = strOgp[key]
		else if (key === 'og:title') ogp.title = strOgp[key]
		else if (key === 'og:url') ogp.url = strOgp[key]
		else if (key === 'og:description') ogp.description = strOgp[key]
		else if (key === 'og:site_name') ogp.site_name = strOgp[key]
		else if (key === 'og:image') ogp.image = strOgp[key]
	})

	return ogp
}
