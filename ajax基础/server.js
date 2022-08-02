// 引入express
const express = require('express')
// 创建app实例对象
const app = express()

// 使用中间件解析urlencoded的请求体参数
app.use(express.urlencoded({ extended: true }))

// 使用中间件解析json的请求体参数
app.use(express.json())

// 暴露静态资源
app.use(express.static(__dirname + '/src'))

// 响应GET请求(携带query参数,get请求没有请求体)
app.get('/get', (request, response) => {
  console.log('get被请求了--query参数是:', request.query)
  response.send('后台的数据')
})

// 响应GET请求(携带params参数)
app.get('/get2/:name/:age', (request, response) => {
  // 携带query参数
  console.log('get2被请求了--params参数是:', request.params)
  // // 携带params参数
  response.send('后台的数据2')
})

// 响应GET请求
app.get('/get3', (request, response) => {
  console.log('后台get3被请求了')
  const person = {name:'张三',age:18,sex:'女'}
  response.send(JSON.stringify(person))
})

// 响应GET请求
app.get('/get3_delay', (request, response) => {
  console.log('后台get3_delay被请求了')
  const person = {name:'张三',age:18,sex:'女'}
  setTimeout(()=>{
    response.send(JSON.stringify(person))
  },2000)
})

// 响应POST请求
app.post('/post', (request, response) => {
  console.log('后台post被请求了--携带的请求体参数是', request.body)
  response.send('后台post被请求了')
})

// 监听
app.listen(3000, (err) => {
  if (!err) {
    console.log('3000服务器已经启动,请点击:')
    console.log('http://127.0.0.1:3000/01.初识ajax.html')
    console.log('http://127.0.0.1:3000/02.xhr的5种状态.html')
    console.log('http://127.0.0.1:3000/03.get请求.html')
    console.log('http://127.0.0.1:3000/04.post请求.html')
    console.log('http://127.0.0.1:3000/05.解析json数据.html')
    console.log('http://127.0.0.1:3000/07.异常与超时.html')
    console.log('http://127.0.0.1:3000/08.取消请求.html')
    console.log('http://127.0.0.1:3000/09.避免重复请求.html')
  }
})