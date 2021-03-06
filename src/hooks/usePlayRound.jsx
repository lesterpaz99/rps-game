import { useState, useEffect } from 'react';

const gameOptions = {
	rock: 'rock',
	scissors: 'scissors',
	paper: 'paper',
};

const usePlayRound = ({ playerSelection, computerSelection }) => {
	const [winnerRound, setWinnerRound] = useState('');
	const [roundMessage, setRoundMessage] = useState('');

	useEffect(() => {
		if (!playerSelection || !computerSelection) {
			return { winnerRound, roundMessage };
		}

		if (playerSelection === computerSelection) {
			setWinnerRound('both');
			setRoundMessage("It's a tie");
		}

		const { rock, scissors, paper } = gameOptions;
		if (
			(playerSelection === scissors && computerSelection === paper) ||
			(playerSelection === paper && computerSelection === rock) ||
			(playerSelection === rock && computerSelection === scissors)
		) {
			setWinnerRound('player');
			setRoundMessage(
				`You win! your ${playerSelection} bits computer's ${computerSelection}`
			);
		} else if (
			(computerSelection === scissors && playerSelection === paper) ||
			(computerSelection === paper && playerSelection === rock) ||
			(computerSelection === rock && playerSelection === scissors)
		) {
			setWinnerRound('computer');
			setRoundMessage(
				`You lost! Computer's ${computerSelection} bits your ${playerSelection}`
			);
		}
	}, [playerSelection, computerSelection]);

	return { winnerRound, roundMessage };
};

export { usePlayRound };
