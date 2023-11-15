import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./config/routes.js";

dotenv.config();
mongoose.connect(process.env.URL_MONGODB).then(() => console.log("MongoDB connected!")).catch((e) => console.log(e));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT)
})