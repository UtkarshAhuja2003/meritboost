const mongoose=require("mongoose")

const tokenSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:[true, "User id is required"]
    },
    token:{
        type:String,
        required:[true, "Token is required"]
    }
    
})
const Token= mongoose.model("Token",tokenSchema);
module.exports=Token;