import axios, { AxiosError, AxiosResponse } from '../../src/index'

// 404
axios({
  method: 'get',
  url: '/error/get1'
}).then((response: AxiosResponse) => {
  console.log(response)
}).catch((err: AxiosError) => {
  console.log(err);
})

/**
 * 返回500错误
 */
axios({
  method: 'get',
  url: '/error/get'
}).then(response => {
  console.log(response);
}).catch((error: AxiosError) => {
  console.log(error.config);
});

/**
 * 延迟5s，网络错误
 */
setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get',
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
}, 5000);

/**
 * 请求超时
 */
axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(response => {
  console.log(response);
}).catch((error: AxiosError) => {
  console.log(error.message);
  console.log(error.config);
  console.log(error.code);
  console.log(error.request);
  console.log(error.isAxiosError);
});