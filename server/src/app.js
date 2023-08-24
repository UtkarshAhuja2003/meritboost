require("dotenv").config();
const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors");
const User = require("./models/trial");
const nodemailer=require("nodemailer")
 

// const sendVerifyMail = async (name, email, user_id) => {
//     try {
//       const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         requireTLS: true,
//         auth: {
//           user: "avensis2023@msit.in",
//           pass: "avensis123"
//         }
//       });
//       const mailOptions = {
//         from: "avensis2023@msit.in",
//         to: email,
//         subject: "for verification mail",
//         html: ' <p> Hii '+ name +  `<img src="<a href="https://imgbb.com/"><img src="https://i.ibb.co/pwBCWWK/Untitled.png" alt="Untitled" border="0"></a><br /><a target='_blank' href='https://emoticoncentral.com/category/exhaust'>exhaust emojis</a><br />"></img> </p>`
//       }
//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error);
//         }
//         else {
//           console.log("email sent :", info.response);
//         }
//       })
//     } catch (error) {
//       console.log(error.message)
//     }
// }



  
app.use(cors({
    origin:["http://localhost:3000","https://meritboost.netlify.app"]
}));
require("./db/conn");
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


require("./models/token");
require("./models/trial");

app.use(require("./routes/user"));


app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening on port ${port}`);
});


