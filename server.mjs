import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import apiAuth from "./routes/auth.mjs";
import apiDiary from "./routes/diary.mjs";
config();
const app = express();
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
		console.log("Connected to MongoDB successfuly");
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};
connectDB();
app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World");
});
app.use("/api/auth", apiAuth);
app.use("/api/diary", apiDiary);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
