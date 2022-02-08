import { createContext, useState } from 'react';

const initialValue = {
	toggleVolume: 1,
};

const globalContext = createContext(initialValue);

const GlobalContextProvider = ({ children }) => {
	const [toggleVolume, setToggleVolume] = useState(1);

	const handleToggleVolume = () => {
		setToggleVolume(toggleVolume === 0 ? 1 : 0);
	};

	return (
		<globalContext.Provider value={{ toggleVolume, handleToggleVolume }}>
			{children}
		</globalContext.Provider>
	);
};

export { GlobalContextProvider, globalContext };
