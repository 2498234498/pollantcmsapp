import axios from 'axios'

// 请求头
axios.defaults.baseURL = process.env.BASE_URL

// 超时，10s
// axios.defaults.timeout = 10000

// 处理发送ajax请求前操作
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 处理接口返回时操作
axios.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.status === 'error') {
    return '系统异常'
  }
  return data.data
}, err => {
  return Promise.reject(err)
})

/**
 * post请求
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 上传文件请求
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * put请求(分片)
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: url,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * delete请求
 * @param url
 * @returns {AxiosPromise}
 */
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: url
  })
}

/**
 * get请求
 * @param url
 * @returns {AxiosPromise}
 */
export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: url,
    params
  })
}
