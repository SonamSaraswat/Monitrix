import express from "express"
import authrouter from "./Routes/auth.js"
import categoriesRoutes from "./Routes/categories.js"
import contentRoutes from "./Routes/contentRoutes.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import contentdata from "./Routes/content.js"


const app=express();

app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use("/api/auth", authrouter)
app.use('/api/categories', categoriesRoutes);
app.use('/api', contentRoutes);
app.use('/api/content', contentdata);


app.listen(5000,()=>{
    console.log("Connected")
})