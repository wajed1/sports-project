const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-sports-website")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("login-signup",newSchema)

module.exports=collection