import axios from "axios";
import { DOMAIN_API, LOGIN } from "../constants/apis";
export default function requestApi(endpoint, method, body, responseType = 'json') {
  const headers = {
    'Accept': 'application/json',
  }
  const instance = axios.create({ headers })
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  const refreshClient = axios.create();

  instance.interceptors.response.use(
    (response) => {
      if (response.data.accessToken && response.data.refreshToken) {
        const { accessToken, refreshToken } = response.data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
      }
      return response
    },
    async (error) => {
      const originConfig = error.config
      if (originConfig._retry) {
        return Promise.reject(error)
      }
      console.log("Access Token is expired")
      if (error.response && error.response.status === 401 && endpoint !== LOGIN) {
        try {
          console.log("Call refreshToken")
          const result = await refreshClient.post(
            `${DOMAIN_API}auth/refresh`,
            { refreshToken: localStorage.getItem('refreshToken') }
          )
          const { accessToken, refreshToken } = result.data
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', refreshToken)
          originConfig.headers['Authorization'] = `Bearer ${accessToken}`
          return instance(originConfig)
        } catch (error) {
          if (error.response || error.response.status === 401) {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            window.location.href = 'https://navi-health.site/login'
          }
          return Promise.reject(error)
        }
      }

      // 403 Handling for Plan Limits
      if (error.response && error.response.status === 403) {
        window.dispatchEvent(new CustomEvent('show-notification', {
          detail: {
            message: "Bạn đã vượt quá giới hạn của gói hiện tại. Vui lòng nâng cấp để tiếp tục!",
            severity: "warning"
          }
        }));
      }

      return Promise.reject(error)
    }
  )
  return instance.request({
    method: method,
    url: `${DOMAIN_API}${endpoint}`,
    data: body,
    responseType: responseType,
    headers: body instanceof FormData
      ? undefined
      : { 'Content-Type': 'application/json' }
  })
}
