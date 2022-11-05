import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
}

app.get("/",(req,res)=>{
    res.send("First request!");
    
})
app.use(cookieParser())
app.use(express.json())



app.listen(8800,()=>{
    
    console.log("Connected to Backend !");

})