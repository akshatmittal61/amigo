import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Edit2 } from "react-feather";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import GlobalContext from "../../Context/GlobalContext";
import diaries from "../../diaries";
import "./write.css";

const Write = () => {
	const body = document.querySelector("body");
	const { axiosInstance } = useContext(GlobalContext);
	const [newDiary, setNewDiary] = useState({
		title: "",
		about: "",
		content: "",
		cover: "",
		color: "#b4c6f0",
		time: moment().format("yyyy-MM-DD") + "T" + moment().format("HH:mm"),
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewDiary({
			...newDiary,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosInstance.post(
				"/api/diary/new",
				newDiary
			);
			console.log(response.data.diary);
		} catch (error) {
			console.log(error);
		}
		/* console.log({
			...newDiary,
			id: "1kdbj2k",
			time: new Date(newDiary.time),
		});
		diaries.push({
			...newDiary,
			id: "1kdbj2k",
			time: new Date(newDiary.time),
		}); */
	};
	useEffect(() => {
		body.style.backgroundColor = "var(--wp--preset--color--pale-cyan-blue)";
		body.style.backgroundImage =
			"url(https://www.transparenttextures.com/patterns/cartographer.png)";
	}, [body]);
	return (
		<Main>
			<section className="write">
				<Header icon={<Edit2 />} />
				<div className="write-body">
					<form className="write-form" onSubmit={handleSubmit}>
						<div className="write-form-group">
							<input
								type="text"
								name="title"
								placeholder="Enter Title..."
								aria-details="Enter Title..."
								value={newDiary.title}
								onChange={handleChange}
								autoFocus
							/>
						</div>
						<div className="write-form-group">
							<input
								type="text"
								name="about"
								placeholder="About this diary entry..."
								aria-details="About this diary entry..."
								value={newDiary.about}
								onChange={handleChange}
							/>
						</div>
						<div className="write-form-group">
							<input
								type="url"
								name="cover"
								placeholder="Cover Image URL"
								aria-details="Cover Image URL"
								value={newDiary.cover}
								onChange={handleChange}
							/>
						</div>
						<div className="write-form-group">
							<label>A theme color: </label>
							<label
								htmlFor="color"
								className="write-color-icon"
								style={{
									width: "2rem",
									height: "2rem",
									borderRadius: "500px",
									backgroundColor: `${newDiary.color}`,
								}}
							></label>
							<input
								type="color"
								id="color"
								name="color"
								placeholder="A theme color"
								aria-details="A theme color"
								value={newDiary.color}
								onChange={handleChange}
								style={{
									opacity: 0,
									width: 0,
									height: 0,
								}}
							/>
						</div>
						<div className="write-form-group">
							<input
								type="datetime-local"
								name="time"
								placeholder="Date and Time"
								aria-details="Date and Time"
								value={newDiary.time.toString()}
								onChange={handleChange}
							/>
						</div>
						<div className="write-form-group">
							<textarea
								name="content"
								placeholder="Your Diary here"
								aria-details="Your Diary here"
								value={newDiary.content}
								onChange={handleChange}
								rows={10}
							></textarea>
						</div>
						<div className="write-form-group">
							<Button text="Save Diary" type="submit" />
						</div>
					</form>
				</div>
			</section>
		</Main>
	);
};

export default Write;
