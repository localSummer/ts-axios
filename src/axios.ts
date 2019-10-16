// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import Axios from './core/Axios'
import { AxiosInstance, AxiosRequestConfig } from './types/index'
import { extend } from './helpers/util'
import defaults from './default'

function createInstence(initConfig: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(initConfig)
  // 类里面的实例方法都挂载在对应类函数的原型上
  const instance = Axios.prototype.request.bind(context)
  // 将Axios类里面的实例方法挂载在instance函数下
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstence(defaults)

export default axios
