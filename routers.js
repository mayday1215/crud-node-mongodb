const express = require("express")

const router = express.Router()

const Student = require("./mongoose")


router.get("/",(req,res) => {
 res.redirect("/students")
})
//所有学生
router.get("/students",(req,res) => {
  Student.find().then(data => {
    res.render("index.html",{
      students:data
    })
  }).catch(err => {
    console.log('出问题啦')
  })
})

//到添加学生
router.get("/students/add",(req,res) => {
  res.render("add.html")
})

//点击保存学生信息
router.post("/students/add",(req,res) => {
  new Student(req.body).save().then(data => {
    console.log('添加成功')
    res.redirect("/students")
  }).catch(err => {
    console.log('添加学生失败')
  })
})

//到编辑
router.get("/students/edit",(req,res) => {
  Student.findById(req.query.id).then(data => {
    console.log(data)
    res.render("edit.html",{
      stuObj:data
    })
  })
})


//编辑页面保存
router.post("/students/edit",(req,res) => {
  console.log(req.body.id)
  Student.findByIdAndUpdate(req.body.id,req.body).then(data => {
    console.log('修改成功')
    res.redirect("/students")
  }).catch(err => {
    console.log('修改失败')
  })
})


//删除
router.get("/students/del",(req,res) => {
  console.log(req.query.id)
  Student.findByIdAndDelete(req.query.id).then(data => {
    console.log('删除成功')
    res.redirect("/students")
  }).catch(err => {
    console.log('删除失败')
  })
})

module.exports = router




