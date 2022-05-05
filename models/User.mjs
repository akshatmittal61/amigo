import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		fname: {
			type: String,
			required: true,
		},
		lname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		emailVerification: {
			type: Boolean,
			default: false,
		},
		avatar: {
			type: String,
			default:
				"https://raw.githubusercontent.com/akshatmittal61/amigo/master/public/images/favicon.svg",
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("user", UserSchema);
export default User;
