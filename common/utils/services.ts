import Request from './request'
import {AppNoticeCacheKey, xTokenCacheKey} from "../const"
import {useIndexStore} from '../../store'
import {getConfig} from "../config"

Request.use( (config: utilsType.requestConfig) => {
	if (!config.header) {
		config.header = {}
	}
	// @ts-ignore
	let authorization = uni.getStorageSync(xTokenCacheKey)

	config.header['Authorization'] = 'Bearer ' + (authorization ? authorization.token : '')

	if (config.url.slice(0, 4) !== "http") {
		config.url = getConfig().baseURL + config.url
	}

	return config
},  (response: ptAny) => {
	switch (response.data.code) {
		case 10006: // 参数错误
			// @ts-ignore
			uni.showToast({
				title: response.data.message,
				icon: 'none',
				duration: 1500
			})
			break
		case 10001: // token 无效
			useIndexStore().authorization(true)
			break
		case 10004: // 关站维护
			// @ts-ignore
			uni.setStorageSync(AppNoticeCacheKey, response.data)
			// @ts-ignore
			uni.redirectTo({
				url: '/pages/notice'
			})
			break
		// todo
	}
	return response
})

export default Request
