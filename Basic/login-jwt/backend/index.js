import express from "express";
import db from "./config/database.js";
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database connected');
    // await db.sync();
} catch (error) {
    console.log(error);
}

app.use(cors({ credentials: true, origin:"http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5001, () => console.log("server running on port 5001"));