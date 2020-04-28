const express = require("express")
const app = express()

const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//引入路由
const router = require("./routers")
app.use(router)



//导入模板
app.engine('html', require('express-art-template'))
//开放资源
app.use("/node_modules/",express.static("./node_modules"))





app.listen("3000",() => {
  console.log('服务器启动成功请访问：http://127.0.0.1:3000')
})


