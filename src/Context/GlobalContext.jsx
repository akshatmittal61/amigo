import axios from "axios";
import { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [openNav, setOpenNav] = useState(false);
	const isLocalAuthenticated = localStorage.getItem("isAuthenticated");
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(isLocalAuthenticated)
	);
	const [isLoading, setIsLoading] = useState(true);
	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000/",
	});
	const [user, setUser] = useState({
		name: "Akshat Mittal",
		status: "Developing",
		email: "akshatmittal2506@gmail.com",
		phone: 9456849466,
		username: "akshatmittal61",
		batch: "2020",
		bio: "MERN Stack developer",
		currentOrganization: "MERN",
		desgination: "MERN Stack Developer",
		dob: "2002-06-25",
		gender: "Male",
		avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
	});
	return (
		<GlobalContext.Provider
			value={{
				openNav,
				setOpenNav,
				isLocalAuthenticated,
				isAuthenticated,
				setIsAuthenticated,
				isLoading,
				setIsLoading,
				axiosInstance,
				user,
				setUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
