import axios from 'axios'
import qs from 'qs'

// axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//配置请求头
// axios.defaults.baseURL = 'http://47.100.44.73:5000/';

// axios.defaults.baseURL = 'http://192.100.111.47:5000/';

axios.defaults.baseURL = 'http://192.168.43.53:5000/';

//返回一个Promise(发送post请求)
export function Post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function Get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: param
      })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  Post,
  Get,
}
