import { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<GlobalContext.Provider value={{ openNav, setOpenNav }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
