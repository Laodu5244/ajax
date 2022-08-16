const express = require('express')
const app = express()

app.use(express.static(__dirname + '/src'))

// 响应get请求
app.get('/get', (request, response) => {
  console.log('get被请求了')
  response.send('get被请求了')
})
app.get('/jquery_get', (request, response) => {
  console.log('jquery_get被请求了', request.query)
  let person = { name: 'jack', age: 23, sex: 'man' }
  response.send(JSON.stringify(person))
})

// jsonp 解决跨域的后端配置
app.get('/jsonp', (request, response) => {
  let { callback } = request.query
  let person = { name: 'jack', age: 18 }
  response.send(`${callback}(${JSON.stringify(person)})`)
})

// 响应post请求
app.post('/jquery_post', (request, response) => {
  console.log('jquery_post被请求了', request.body)
  let person = { name: 'jack', age: 23, sex: 'man' }
  response.send(JSON.stringify(person))
})

app.listen(3030, (err) => {
  if (!err) {
    console.log('3030服务器已经启动')
    console.log('http://127.0.0.1:3030/01.jquery封装ajax.html')
    console.log('http://127.0.0.1:3030/02.回调地狱.html')
  }
})