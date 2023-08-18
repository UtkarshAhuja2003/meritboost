const mongoose=require("mongoose")
const validator = require("validator")

const trialSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    email:{
        type:String,
        validate:validator.isEmail,
    },
    subject:{
        type:String,
        required:[true, "Subject is required"]
    },
    grade:{
        type:Number,
        required:[true, "Grade is required"]
    },
    date:{
        type:String,
        
        required:[true, "Date is required"]
    },
    time:{
        type:String,
        required:[true, "Time is required"]
    },
    phone:{
        type:String,
        required:[true, "Phone is required"]
    },
    country:{
        type:String,
        required:[true, "Country is required"]
    }
})
const Trial= mongoose.model("Trial",trialSchema);
module.exports=Trial;