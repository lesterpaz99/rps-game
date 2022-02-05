import { useState } from 'react';
import { GoUnmute } from 'react-icons/go';
import { IoVolumeMute } from 'react-icons/io5';
import { useSound } from 'use-sound';
import 'nes.css/css/nes.min.css';
import './Header.css';
import gameOverSound from '../sounds/gameOver.wav';

const Header = () => {
	const [toggleVolume, setToggleVolume] = useState(0);
	const [playSound] = useSound(gameOverSound, { volume: toggleVolume });

	const handleToggleVolume = () => {
		setToggleVolume(toggleVolume === 0 ? 1 : 0);

		// This function is not here, is just for demonstrate
		//playSound();
	};

	return (
		<header>
			<span className='nes-text'>rps-game</span>
			<div>
				<a
					href='https://github.com/lesterpaz99/rps-game'
					target='_blank'
					className='nes-icon github is-medium'
				></a>
				<button className='nes-btn' onClick={handleToggleVolume}>
					{toggleVolume ? <GoUnmute /> : <IoVolumeMute />}
				</button>
			</div>
		</header>
	);
};

export { Header };
