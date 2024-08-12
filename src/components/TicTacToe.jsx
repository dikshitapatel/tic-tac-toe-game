import React, {useState} from 'react';

const initialBoard = () => {
    return Array(9).fill(null)
  }
  
const TicTacToe = () => {
    const[board,setBoard] = useState(initialBoard());
    const[isXNext, setIsXNext] = useState(false);

    const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

    const handleClick = (index) =>{
        const winner = calcWinner(board);

        if(winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }

    const resetGame = () =>{
        setBoard(initialBoard());
        setIsXNext(false);
    }

    const calcWinner = (currentBoard) =>{
        for(let i=0;i<WINNING_PATTERN.length;i++){
            const [a,b,c] = WINNING_PATTERN[i];
            if(currentBoard[a] && currentBoard[a]==currentBoard[b] && currentBoard[b]==currentBoard[c]){
                return currentBoard[a];
            }
        }
        return null;
        
    }

    const getStatusMessage = () => {
                console.log("here")

        const winner = calcWinner(board);
        if(winner)
            return `Player ${winner} wins`;
        if(!board.includes(null))
            return 'Its a draw!'
        
        return  isXNext ? `Player X turn` : "Player O turn"
    }

    return (
      <div className="App">
        <div>
        <h2> {getStatusMessage()} </h2>
          <button onClick={resetGame}>Reset Game</button>
        </div>
         
         <div>
         <h2> Board: </h2>
         
          <div className='board'>
            {board.map((cell,index)=>
            <button 
            className='cell' 
            key={index}
            onClick={()=>{
                handleClick(index)}}
            disabled={cell!==null}
            > 
            {cell} 
            </button>
            )}
  
          </div>
          </div> 
          </div>
          )
         
}

export default TicTacToe
