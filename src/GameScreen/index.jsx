import { useEffect } from 'react';
import { useGame } from '../hooks/useGame';
import {
	FaRegHandRock,
	FaRegHandScissors,
	FaRegHandPaper,
} from 'react-icons/fa';
import './GameScreen.css';

const GameScreen = () => {
	const {
		round,
		roundMessage,
		playerScore,
		computerScore,
		winner,
		handlePlayerSelection,
	} = useGame();

	return (
		<div className='game-wrapper'>
			<h2 className='round-title'>Round {round}</h2>
			<p className='info'>Make your choice:</p>
			<ul className='choice-list'>
				<li className='nes-container is-rounded'>
					<button
						className='nes-btn'
						onClick={() => handlePlayerSelection('rock')}
					>
						<FaRegHandRock />
					</button>
				</li>
				<li className='nes-container is-rounded'>
					<button
						className='nes-btn'
						onClick={() => handlePlayerSelection('scissors')}
					>
						<FaRegHandScissors />
					</button>
				</li>
				<li className='nes-container is-rounded'>
					<button
						className='nes-btn'
						onClick={() => handlePlayerSelection('paper')}
					>
						<FaRegHandPaper />
					</button>
				</li>
			</ul>

			<section className='details-section'>
				<div className='score'>
					<span>{playerScore}</span>
					<p>Player</p>
				</div>
				<div className='score'>
					<span>{computerScore}</span>
					<p>Computer</p>
				</div>
			</section>

			<div>
				<p>{roundMessage}</p>
			</div>
			{winner && `${winner} won the game! Congratulations!!!`}
		</div>
	);
};

export { GameScreen };
