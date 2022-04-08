import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv';
const app=express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({ limit:"30mb",extended:"true"}));
app.use(cors());

app.use('/posts',postRoutes); 

// const CONNECION_URL="mongodb+srv://raj819314:LV4t8likwrTHrDGt@cluster0.ae6h4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECION_URL="mongodb+srv://raj819314:raj@570482@cluster0.ig0pj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);