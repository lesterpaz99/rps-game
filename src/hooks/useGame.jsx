import { useState, useEffect } from 'react';
import { useComputerPlay } from './useComputerPlay';
import { usePlayRound } from './usePlayRound';

const useGame = () => {
	const [round, setRound] = useState(0);
	const [selections, setSelections] = useState({
		playerSelection: null,
		computerSelection: null,
	});
	const [scores, setScores] = useState({ playerScore: 0, computerScore: 0 });
	const [winner, setWinner] = useState(null);

	const computerChoice = useComputerPlay();

	const { winnerRound, roundMessage } = usePlayRound({
		playerSelection: selections.playerSelection,
		computerSelection: selections.computerSelection,
	});

	useEffect(() => {
		const goalScore = 5;

		if (scores.playerScore < goalScore && scores.computerScore < goalScore) {
			if (winnerRound === 'player') {
				setScores({ ...scores, playerScore: scores.playerScore + 1 });
			}
			if (winnerRound === 'computer') {
				setScores({ ...scores, computerScore: scores.computerScore + 1 });
			}
			setRound(round + 1);
		} else {
			setWinner(scores.playerScore === goalScore ? 'Player' : 'Computer');
		}
	}, [winnerRound, roundMessage]);

	const handlePlayerSelection = (playerChoice) => {
		setSelections({
			playerSelection: playerChoice,
			computerSelection: computerChoice,
		});
	};

	const { playerScore, computerScore } = scores;
	return {
		round,
		playerScore,
		computerScore,
		winner,
		roundMessage,
		handlePlayerSelection,
	};
};

export { useGame };
