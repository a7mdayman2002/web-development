const mongoose =require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/students",
{useNewUrlParser:true,useUnifiedTopology:true

}).then(()=>{
    console.log("connection success");
}).catch((error)=>{
    console.log("something wrong",error);
})
