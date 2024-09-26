import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calculateWinner } from '../../utils';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setIsXNext((xIsNext) => !xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
    }

    return (
        <div>
            <Board cells = {board} onClick={handleClick}></Board>
            {winner && <div className="game-winner">
                Winner is {winner}
            </div>}
            <button className='game-reset' onClick={handleResetGame}>
                Reset Game
            </button>
            
        </div>
    );
};

export default Game;