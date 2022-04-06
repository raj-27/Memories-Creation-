import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({ limit:"30mb",extended:"true"}));
app.use(cors());

const CONNECION_URL="mongodb+srv://raj819314:LV4t8likwrTHrDGt@cluster0.ae6h4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT ||5000

mongoose.connect(CONNECION_URL,{useNewUrlParser:true,useUnifiedTopology:"ture"})
.then(()=>app.listen(PORT,()=>{console.log(`server running on Port ${PORT}`)}))
.catch((error)=>console.log(error))

mongoose.set('useFindAndModify',false);