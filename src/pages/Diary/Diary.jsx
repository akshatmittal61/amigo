import React, { useEffect, useState } from "react";
import { Book } from "react-feather";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import diaries from "../../diaries";

const Diary = () => {
	const { id } = useParams();
	const [diary, setDiary] = useState({});
	useEffect(() => {
		diaries.forEach((d) => {
			if (id === d.id) {
				setDiary(d);
			}
		});
	}, [id]);

	return (
		<Main>
			<section className="diary">
				<Header icon={<Book />} />
				<div className="diary-body">{diary.title}</div>
			</section>
		</Main>
	);
};

export default Diary;
