import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router'

const TRACE_ID_STORAGE_KEY = 'traceId'

function generateId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, '')
  }
  return `${Date.now()}${Math.random().toString(16).slice(2)}`
}

function getOrCreateTraceId() {
  let traceId = localStorage.getItem(TRACE_ID_STORAGE_KEY)
  if (!traceId) {
    traceId = generateId()
    localStorage.setItem(TRACE_ID_STORAGE_KEY, traceId)
  }
  return traceId
}

const request = axios.create({
  baseURL: '/api',
  timeout: 15000
})

request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  const traceId = getOrCreateTraceId()
  const requestId = generateId()

  config.headers['X-Trace-Id'] = traceId
  config.headers['X-Request-Id'] = requestId

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res.data
    }
    if (res.code === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push('/login')
      ElMessage.error('登录已过期，请重新登录')
      return Promise.reject(new Error(res.message))
    }
    ElMessage.error(res.message || '请求失败')
    return Promise.reject(new Error(res.message))
  },
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push('/login')
    }
    ElMessage.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)

export default request
