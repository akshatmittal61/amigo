import React from "react";

const AccordionSummary = (props) => {
	return (
		<div className="accordian-header" onClick={props.onClick}>
			<div className="accordian-header-content">{props.children}</div>
			<div className="accordian-header-icon">
				<span className="material-icons">expand_less</span>
			</div>
		</div>
	);
};

export default AccordionSummary;
