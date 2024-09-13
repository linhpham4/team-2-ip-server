import express from "express";
const app = express();
import "dotenv/config";
const PORT = process.env.PORT || 8081;
import cors from "cors";

app.use(cors())

app.use(express.json()); 

app.use("/", ipRoutes);

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
})