import React, { useEffect, useState } from "react";
import { Book, Calendar, Clock } from "react-feather";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import diaries from "../../diaries";
import "./diary.css";

const Diary = () => {
	const { id } = useParams();
	const body = document.querySelector("body");
	const [diary, setDiary] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const parseContent = (s) => {
		const parser = new DOMParser();
		let a = parser.parseFromString(s, "text/html");
		let b = Array.from(a.body.children);
		const diaryContent = document.createElement("div");
		diaryContent.className = "diary-content";
		b.forEach((ele) => {
			diaryContent.append(ele);
		});
		return <div ref={(ref) => ref.appendChild(diaryContent)}></div>;
	};
	const getHTML = (s) => {
		return { __html: s };
	};
	useEffect(() => {
		diaries.forEach((d) => {
			if (id === d.id) {
				setDiary(d);
				body.style.backgroundImage = `url(${d.cover})`;
			}
		});
		setIsLoading(false);
	}, [id]);
	return (
		<Main>
			<section className="diary">
				<Header icon={<Book />} />
				{!isLoading && (
					<div className="diary-body">
						<div className="diary-title">
							<h1>{diary.title}</h1>
						</div>
						<span className="diary-about">{diary.about}</span>
						<div className="diary-schedule">
							<div className="diary-date">
								<Calendar />{" "}
								<span>
									{`${diary.time.getDate()}/${diary.time.getMonth()}/${diary.time.getFullYear()}`}
								</span>
							</div>
							<div className="diary-time">
								<Clock />{" "}
								<span>
									{`${diary.time.getHours()}:${diary.time.getMinutes()}`}
								</span>
							</div>
						</div>
						<div
							className="diary-content"
							dangerouslySetInnerHTML={getHTML(diary.content)}
						></div>
					</div>
				)}
			</section>
		</Main>
	);
};

export default Diary;
