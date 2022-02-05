import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
	const [loadingValue, setLoadingValue] = useState(0);

	useEffect(() => {
		if (loadingValue !== 100) {
			setTimeout(() => {
				setLoadingValue(loadingValue + 25);
			}, 750);
		}
	}, [loadingValue]);

	return (
		<div className='progress_bar-container'>
			<h1>Rock, Paper, Scissors</h1>
			<progress
				className='nes-progress is-primary'
				value={loadingValue}
				max='100'
			></progress>
		</div>
	);
};

export { Loader };
