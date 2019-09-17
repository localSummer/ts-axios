// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig) {
  xhr(config)
}

export default axios
