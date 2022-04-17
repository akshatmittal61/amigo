import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalContext";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalProvider>
				<App />
			</GlobalProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
