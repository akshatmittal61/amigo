import React from "react";
import { Calendar } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./card.css";

const Card = ({ card }) => {
	const t = card.time;
	const navigate = useNavigate();
	return (
		<div className="card">
			<div
				className="card-image"
				style={{
					backgroundImage: `url(${card.cover})`,
				}}
				onClick={() => navigate(`/diary/${card.id}`)}
			></div>
			<div className="card-content">
				<div className="card-content-data">
					<div className="card-content-data__title">
						<Link to={`/diary/${card.id}`}>{card.title}</Link>
					</div>
					<div className="card-content-data__short">{card.about}</div>
				</div>
				<div className="card-content-addons">
					<div className="card-content-addons__date">
						<Calendar />{`${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`}
					</div>
					<div className="card-content-addons__read">
						<Button
							size="small"
							text="Read"
							onClick={() => navigate(`/diary/${card.id}`)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
