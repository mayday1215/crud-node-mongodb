//引入mongoose操作数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Student = mongoose.model('Student', {
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    type:Number,
    required:true,
    enum:[0,1]
  }
});

module.exports = Student