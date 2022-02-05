import 'nes.css/css/nes.min.css';
import './BallonsInfo.css';

const BallonsInfo = ({ handleStartGame }) => {
	return (
		<div className='ballon-container'>
			<section className='nes-container border-none'>
				<div className='message-list'>
					<div className='message -left'>
						<i className='nes-bcrikko' />
						{/* Balloon */}
						<div className='nes-balloon from-left'>
							<p>Hello Player</p>
							<p>Welcome to rps-game. The first to reach 5 points wins</p>
							<p>Press the START button bellow to start the game</p>
						</div>
					</div>
					<button
						onClick={handleStartGame}
						className='nes-btn is-primary btn-start'
					>
						START
					</button>
				</div>
			</section>
		</div>
	);
};

export { BallonsInfo };
