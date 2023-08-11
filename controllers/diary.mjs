import User from "../models/User.mjs";
import Diary from "../models/Diary.mjs";

const newDiary = async (req, res) => {
	const { title, about, content, cover, color, time } = req.body;
	try {
		const newDiary = new Diary({
			user: req.user.id,
			title,
			about,
			content,
			cover,
			color,
			time,
		});
		const diary = await newDiary.save();
		res.status(200).json({ diary, message: "Added diary succesfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server Error" });
	}
};

const all = async (req, res) => {
	try {
		const diaries = await Diary.find({ user: req.user.id });
		console.log(diaries);
		if (!diaries)
			return res.status(404).json({ message: "Diary Entry not found" });
		res.status(200).json(diaries);
	} catch (err) {
		console.error(err);
		res.status(500).send("Server error");
	}
};

const single = async (req, res) => {
	console.log(req.params.id);
	try {
		const diary = await Diary.findOne({ _id: req.params.id });
		console.log(diary);
		if (!diary)
			return res.status(404).json({ message: "Diary Entry not found" });
		res.status(200).json(diary);
	} catch (err) {
		console.error(err);
		res.status(500).send("Server error");
	}
};

export { newDiary, all, single };
