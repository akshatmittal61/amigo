import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
		required: true,
		default:
			"https://github.com/akshatmittal61/amigo/blob/master/public/images/favicon.png",
	},
	color: {
		type: String,
		required: true,
		default: "#89add7",
	},
	time: {
		type: Date,
		required: true,
	},
});

const User = mongoose.model("user", UserSchema);
export default User;
