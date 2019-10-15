import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

axios.get('/extend/get');

axios.options('/extend/options');

axios.delete('/extend/delete');

axios.head('/extend/head');

axios.post('/extend/post', { msg: 'post' });

axios.put('/extend/put', { msg: 'put' });

axios.patch('/extend/patch', { msg: 'patch' });

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hello'
  }
})

interface ResponseData<T = any> {
  code: number
  result:T
  msg: string
}

interface User {
  name: string,
  age: number
}

async function getUser<T>() {
  try {
    const response = await axios<ResponseData<T>>('/extend/user');
    console.log(response.data);
    return response.data
  }
  catch (err) {
    console.log(err);
  }
}

async function test() {
  const user = await getUser<User>()
  console.log(user.result)
}

test()
