import axios from 'axios'

// import store from '@/store/index.js'
class Api {
  axios () {
    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    axios.defaults.baseURL = '//u-to-world.com:3000'
    // let axiosDate = new Date()

    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      // store.dispatch('FETCH_LOADING', true) // 请求时加载loading
      config.params = Object.assign({
        xhrFields: '{ withCredentials: true }'
      }, config.params)

      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })

    return axios
  }
}

export default new Api()
