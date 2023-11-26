import React from "react"

const Square = ({value, index, handleSquareClick, gameOver}) => {
const handleClick = () => {
  console.log(gameOver)
  if (gameOver){
    handleSquareClick(null)
  }else {
    handleSquareClick(index)
  }
}  
  return (
    <>
      <div className="square" onClick={handleClick}>{value}</div>
    </>
  )
}
export default Square
