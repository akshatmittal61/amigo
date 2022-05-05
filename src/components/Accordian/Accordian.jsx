import React, { useState } from "react";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";
import "./accordian.css";

const Accordian = ({
	defaultExpanded = false,
	summary = "Your Title Here",
	details = "Your content Here",
}) => {
	const [expandedState, setExpandedState] = useState(defaultExpanded);
	return (
		<div className={`accordian accordian-expand-${expandedState}`}>
			<AccordionSummary
				onClick={() => {
					setExpandedState(!expandedState);
				}}
			>
				{summary}
			</AccordionSummary>
			<AccordionDetails>{details}</AccordionDetails>
		</div>
	);
};

export default Accordian;
