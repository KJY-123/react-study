const express = require('express')
const app = express()

app.use((request, response, next) =>{
  console.log('有人请求服务器2了');
  next()
})

app.get('/cars', (request, response) =>{
  const student = [
    {id:'001', name: '奔驰', price: 199},
    {id:'002', name: '马自达', price: 109},
    {id:'003', name: '捷达', price: 120},
  ]
  response.send(student)
})

app.listen(5004, (err) =>{
  if (!err) console.log('服务器2启动成功了，请求学生信息地址为：http://localhost:5004/cars')
})