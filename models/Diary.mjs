import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	title: {
		type: String,
		required: true,
	},
	about: {
		type: String,
	},
	content: {
		type: String,
		required: true,
	},
	cover: {
		type: String,
		default:
			"https://github.com/akshatmittal61/amigo/blob/master/public/images/favicon.png",
	},
	color: {
		type: String,
		default: "#89add7",
	},
	time: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("diary", DiarySchema);
export default User;
