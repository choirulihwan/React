import { useState } from 'react'

//komponen square
function Square({value, onSquareClick}) {
  return (
    <>
      <button className='square' onClick={onSquareClick}>{value}</button>
    </>
  )
}

//komponen board
function Board({squares, xIsNext, onPlay}) { 
  
  function handleClick(i) {
    //jika square sudah ada isinya atau sudah ada pemenangnya, keluar dari fungsi
    if(squares[i] || calculateWinner(squares)) return;

    //menduplikat array squares ke nextSquares
    const nextSquares = squares.slice();
    
    //mengecek jika sekarang bagiannya X, maka next adalah O
    nextSquares[i] = (xIsNext) ? 'X' : 'O';

    // jalankan onplay (menulis current square dan next move)
    onPlay(nextSquares);
    
  }

  //mengecek siapa pemenangnya
  const winner = calculateWinner(squares);
  let status = '';
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />      
      </div>
    </>
  )
}

function Game() {
  //array untuk mengetahui state untuk semua komponen   
  const [history, setHistory] = useState([Array(9).fill(null)]);
  
  //default history awal
  const [currentMove, setCurrentMove] = useState(0);

  //current square = history terakhir dari move
  const currentSquare = history[currentMove];

  //langkah yg genap dan yang pertama adalah x
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    //menyimpan current move kedalam history
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    //menambahkan current history ke dalam array
    setHistory(nextHistory);

    //mengeset current move ke history terakhir
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  //membuat fitur time travel berupa list tombol
  const moves = history.map((squares, move) => {
    let description = '';
    if(move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return(
   <div className='game'>
      <div className='game-board'>
        <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
   </div> 
  );

}

//fungsi untuk mengecek pemenang
function calculateWinner(squares) {
  const lines = [
    //square horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //square vertikal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //square diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++) {
    //destructuring array 2 dimensi
    const [a, b, c] = lines[i];

    //jika kolom a = b = c maka akan menjadi pemenang
    if((squares[a]) && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
      return squares[a];
    }
  }

  return false;  
}

export default Game;
