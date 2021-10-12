export type OGP = {
	type?: string
	title?: string
	url?: string
	description?: string
	site_name?: string
	image?: string
}

export type ApplicationDetail = {
	ogp: OGP
	githubUrl: string | null
	qiitaUrl: string | null
}

export type ApplicationUrl = {
	app: string
	github?: string
	qiita?: string
}
