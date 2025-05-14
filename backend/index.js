import express from "express"
import authrouter from "./Routes/auth.js"
import categoriesRoutes from "./Routes/categories.js"
import cors from "cors"
import cookieParser from "cookie-parser";


const app=express();

app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use("/api/auth", authrouter)
app.use('/api/categories', categoriesRoutes);

app.listen(5000,()=>{
    console.log("Connected")
})