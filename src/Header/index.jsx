import { useContext } from 'react';
import { globalContext } from '../context/globalContext';
import { GoUnmute } from 'react-icons/go';
import { IoVolumeMute } from 'react-icons/io5';
import 'nes.css/css/nes.min.css';
import './Header.css';

const Header = () => {
	const { toggleVolume, handleToggleVolume } = useContext(globalContext);

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
