import { useEffect, useContext } from 'react';
import { StarsPoints } from '../StarsPoints';
import { useSound } from 'use-sound';
import { globalContext } from '../context/globalContext';
import './DialogWinner.css';
import gameOverSound from '../sounds/gameOver.wav';
import gameWinSound from '../sounds/gameWin.wav';

const DialogWinner = ({ winner, handleStartGame }) => {
	const { toggleVolume } = useContext(globalContext);
	const soundToPlay = winner === 'Player' ? gameWinSound : gameOverSound;
	const [playSound] = useSound(soundToPlay, { volume: toggleVolume });

	useEffect(() => {
		playSound();
	});

	return (
		<div className='winner-dialog'>
			<section>
				<dialog className='nes-dialog is-rounded' id='dialog-rounded'>
					<div method='dialog'>
						<p className='title'>
							{winner === 'Player'
								? 'You win! Congratulation!!!'
								: `Oh no! ${winner} won the game`}
							{winner === 'Player' && <StarsPoints />}
						</p>
						<menu className='dialog-menu'>
							<button className='nes-btn is-primary' onClick={handleStartGame}>
								{winner === 'Player' ? 'Play Again' : 'Try again'}
							</button>
						</menu>
					</div>
				</dialog>
			</section>
		</div>
	);
};

export { DialogWinner };
