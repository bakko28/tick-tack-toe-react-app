import { useState } from 'react';
import React from 'react';
import Board from './board';
import './game.css';
import {calculateWinner} from '../helper.js'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        
        if (winner || boardCopy[index]) return null

        boardCopy[index] = xIsNext ? 'X' : '0'

        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} click={handleClick}  />
            <p className='game_info'>
                { winner ? 'Победитель: ' + winner : 'Сейчас ходит: ' + (xIsNext ? 'X' : '0')}
            </p>
        </div>
    );
}

export default Game;
