import React, { useState, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [theme, setTheme] = useState(true);
	const [openSideBar, setOpenSideBar] = useState(false);
	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000/",
	});
	return (
		<GlobalContext.Provider
			value={{
				theme,
				setTheme,
				openSideBar,
				setOpenSideBar,
				axiosInstance,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
