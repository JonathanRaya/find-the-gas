import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import Instructions from "./components/Instructions"



const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [bombLocation, setBombLocation] = useState( Math.floor(Math.random() * board.length))

  const [counter, setCounter] = useState(5)

  const [gameOver, setGameOver] = useState(false)

  const resetGame = () => {
    // Setting the counter back to 0 after clicking button.
    setCounter(5)
    // 
    setGameOver(false)
    setBoard([ 
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
    ])

    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
  }

  const handleSquareClick = (clickedSquareindex) => {
    // While loop to repeat function until bomb and treasure are at seperate locations.
    if (treasureLocation === bombLocation){
      setBombLocation(Math.floor(Math.random() * board.length))
    }
    let updatedBoard = [...board]

    if (clickedSquareindex === treasureLocation) {
      updatedBoard[clickedSquareindex] = "⛽️"
      setGameOver(true)
      setTimeout(() => {
      alert("You win! You found the gas pump. ")
      }, 500)

    } else if (clickedSquareindex === bombLocation) {
      updatedBoard[clickedSquareindex] = "🪵"
      setGameOver(true)
      setTimeout(() => {
        alert("You lose, you found the fallen tree.")
      }, 500)

    } else {
        setCounter((prevCounter) => {
        const newCounter = prevCounter - 1
          if (newCounter === 0) {
            setTimeout(() => {
            alert("You lose, you didn't find the gas pump within 5 attempts")
      }, 500)
    }
    return newCounter
  })
  updatedBoard[clickedSquareindex] = "🚫"
}

    setBoard(updatedBoard);
  }
  

  
  return (
    <>
      <h1>Find The Gas</h1>
      <div className='big-box'>
        <div className='car'></div>
        <div className="board">
          {board.map((value, index) => {
            return (
            <Square
            value={value}
            index={index}
            handleSquareClick={handleSquareClick}
            key={index}
            gameOver={gameOver}
            />
            )
          })}
          </div>
        <div className="how-to">
          <Instructions />
        </div>
        </div>
        <div className='counter-box'>Attempts remaining:{counter}</div>
        <button className='restart' onClick={resetGame}>Click here to play again.</button>
    </>
  )
}

export default App
