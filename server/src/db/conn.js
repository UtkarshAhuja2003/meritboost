const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://lakshita:${process.env.MONGO_DB}@teachme.64pj8hg.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`success`);
}).catch((e) =>{
    console.log(e);
})