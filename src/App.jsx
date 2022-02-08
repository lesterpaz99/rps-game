import { useState, useEffect, useContext } from 'react';
import { globalContext } from './context/globalContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { Loader } from './Loader';
import { GameScreen } from './GameScreen';
import { BallonsInfo } from './BallonsInfo';
import { useSound } from 'use-sound';
import gameStartSound from './sounds/startGame.wav';
import 'nes.css/css/nes.min.css';
import './App.css';

function App() {
	const [loading, setLoading] = useState(true);
	const [startGame, setStartGame] = useState(false);
	const { toggleVolume } = useContext(globalContext);
	const [playSound] = useSound(gameStartSound, { volume: toggleVolume });

	useEffect(() => {
		setTimeout(() => setLoading(false), 3500);
	}, []);

	const handleStartGame = () => {
		setStartGame(!startGame);
		playSound();
	};

	if (loading) return <Loader />;

	return (
		<div className='App'>
			<Header />
			{startGame ? (
				<GameScreen handleStartGame={handleStartGame} />
			) : (
				<BallonsInfo handleStartGame={handleStartGame} />
			)}
			<Footer />
		</div>
	);
}

export default App;
