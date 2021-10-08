export type CareerDetail = {
	date: string
	title: string
	iconName: string
	description?: string
}

export const careers: CareerDetail[] = [
	{ date: '2014.3', title: '日本大学 理工学部 建築学科 卒業', iconName: 'school' },
	{
		date: '2014.4',
		title: '株式会社 構造ソフト 入社',
		iconName: 'work',
		description: '4年2ヶ月勤務。Windows用のネイティブアプリケーションの開発に務めていました。'
	},
	{
		date: '2018.6',
		title: '機械学習',
		iconName: 'ml',
		description: '1年程度独学しました。'
	},
	{
		date: '2021.1',
		title: 'Webフロントエンド開発',
		iconName: 'web',
		description: '現在まで独学しています。'
	}
]
