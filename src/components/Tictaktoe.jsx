import { useState } from 'react';
import React from 'react';
import './styles.css';

export default function Tictaktoe() {
    const [btns, setbtns] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('O');
    const [over, setOver] = useState(false);
    const [winner, setWinner] = useState(null);

    const calculateWinner = (newBtns) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]    
        ];

        for (let [a, b, c] of winningCombinations) {
            if (newBtns[a] && newBtns[a] === newBtns[b] && newBtns[a] === newBtns[c]) {

                setWinner(turn);
                setOver(true);
                return true;
            }
        }
        if (!newBtns.includes(null)) {
            setWinner("Draw");
            setOver(true);
            return true;
        }
        return false;
    };
    const handleClick = (index) => {
        if (btns[index] !== null) return;

        const newBtns = [...btns];
        newBtns[index] = turn;
        setbtns(newBtns);

        if (!calculateWinner(newBtns)) {
            setTurn(turn === "O" ? "X" : "O");
        }
    };

    const onreset = () => {
        setbtns(Array(9).fill(null));
        setTurn('O');
        setOver(false);
        setWinner(null);
    };

    return (
        <>

            <h3>{winner==='Draw'? `Draw`: winner ? `${winner} wins` : `It is ${turn} turn`}  </h3>
            <br />


            <div className='container'>
                {(winner ==='X'|| winner === 'O') && (
                    <img className='celebration-gif'  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWgyMGY4YWRpdHFqMXVhbTdmMDJ4MzY3ejl5ZXVpbzdmOTlwdTltNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ddHhhUBn25cuQ/giphy.gif" alt="giphi" />
                )}
                {
                    winner === 'Draw' &&(
                        <img className='celebration-gif' src="https://media.giphy.com/media/Te0mQ7oWbqot5LpaTT/giphy.gif?cid=790b7611sqjarhzxmlwxocy07afe6ojt2i15dunp0dqq041c&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="giph" />
                    )
                }
                <div className="row">
                    <button className='btn btn-primary ' onClick={() => handleClick(0)} disabled={over}>{btns[0]}</button>
                    <button className='btn btn-primary ' onClick={() => handleClick(1)} disabled={over}>{btns[1]}</button>
                    <button className='btn btn-primary ' onClick={() => handleClick(2)} disabled={over}>{btns[2]}</button>
                </div>
                <div className="row">
                    <button className='btn btn-primary ' onClick={() => handleClick(3)} disabled={over}>{btns[3]}</button>
                    <button className='btn btn-primary ' onClick={() => handleClick(4)} disabled={over}>{btns[4]}</button>
                    <button className='btn btn-primary ' onClick={() => handleClick(5)} disabled={over}>{btns[5]}</button>
                </div>
                <div className="row">
                    <button className='btn btn-primary ' onClick={() => handleClick(6)} disabled={over}>{btns[6]}</button>
                    <button className='btn btn-primary ' onClick={() => handleClick(7)} disabled={over}>{btns[7]}</button>
                    <button className='btn btn-primary ' onClick={() => handleClick(8)} disabled={over}>{btns[8]}</button>
                </div>


            </div>

            <button className='reset' onClick={onreset}> Reset </button>
        </>
    );
}
