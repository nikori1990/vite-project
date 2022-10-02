import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const config = {
    // 默认地址
    baseURL: import.meta.env.VITE_API_BASEURL, // API 请求的默认前缀
    // 设置超时时间（10s）
    timeout: 3000,
    // 跨域时候允许携带凭证
    withCredentials: false,
}

class RequestHttp {
    private service: AxiosInstance

    public constructor(config: AxiosRequestConfig) {
        // 实例化axios
        this.service = axios.create(config)
        this.init()
    }

    private init() {
        this.interceptorsRequest()
        // this.interceptorsResponse()
    }

    private interceptorsRequest() {
        /**
         * @description 请求拦截器
         * 客户端发送请求 -> [请求拦截器] -> 服务器
         * token校验(JWT) : 接受服务器返回的token,存储到vuex/本地储存当中
         */
        // this.service.interceptors.request.use(
        //     (config: CCRequestConfig) => {
        //         // console.log(config && config.showLoading)
        //         // 应用加载文案
        //         this.showLoading = config.showLoading ?? IS_SHOW_LOADING
        //         // * 将当前请求添加到 pending 中
        //         axiosCanceler.addPending(config)
        //         this.showLoading && showFullScreenLoading()
        //         const token = getToken()
        //         return { ...config, headers: { token: token || '', lang: getLang() } }
        //     },
        //     (error: AxiosError) => Promise.reject(error)
        // )
    }

    // * 常用请求方法封装
    get<T>(url: string, params?: object, _object = {}): Promise<T> {
        return this.service.get(url, { params, ..._object })
    }
    post<T>(url: string, params?: object, _object = {}): Promise<T> {
        return this.service.post(url, params, _object)
    }
}

export default new RequestHttp(config)
