import { useState, useEffect } from 'react';

const useComputerPlay = () => {
	const [computerPlay, setComputerPlay] = useState(null);
	const options = ['rock', 'paper', 'scissors'];

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * 3);
		const choice = options[randomIndex];
		setComputerPlay(choice);
	});

	return computerPlay;
};

export { useComputerPlay };
