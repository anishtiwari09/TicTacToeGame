import React, { useState } from 'react'
import Header from '../Header/Header'
import styles from "./tictactoe.module.css"
export default function TicTacToe() {
  const [totalTurn, setTotalTurn] = useState(0)
  const [gameStatus, setGameStatus] = useState(false)
  const [showWinner, setShowWinner] = useState("")
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])
  const checkGameStatus = (arr, totalTurn) => {
    //check diagonally

    const changeGameStatus = (val) => {
      
      setGameStatus(true)
      setShowWinner(val === 0 ? "A" : "B")
    }
    if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
      if (arr[0][2] !== "") {

        changeGameStatus(arr[0][2])
        return
      }
    }
    if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
      
      if (arr[0][0] !== "") {

        changeGameStatus(arr[0][0])
        return
      }
    }
    //check horizontally
    for (let i = 0; i < 3; i++) {
      if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
        if (arr[i][0] !== "") {

          changeGameStatus(arr[i][0])
          return
        }
      }
    }

    //check vertically
    for (let i = 0; i < 3; i++) {
      if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
        if (arr[0][i] !== "") {

          changeGameStatus(arr[0][i])
          return
        }
      }
    }
if(totalTurn===9)
setGameStatus(true)
  }
  const handlePlay = (i, j) => {
    let value = board[i][j]

    if (value !== "" || gameStatus)
      return
    board[i][j] = totalTurn % 2 ? 1 : 0
    setBoard([...board])
    
    if (totalTurn >= 4) {
      
      checkGameStatus(board, totalTurn+1)
    }

    setTotalTurn(totalTurn + 1)
  }

  return (
    <div className={styles.container}>
      <Header currentScreen={"Tic Tac Toe"} />
      <div>
        <div>Player A: O</div>
        <div>Player B: X</div>
      </div>
      {!gameStatus&&<h2>Turn: Player {totalTurn % 2 ? "B" : "A"}</h2>}
      <div >
        <table className={styles.board}>
          {board?.map((row, i) => <tbody key={i}><tr>
            {row?.map((cell, j) => <td onClick={() => handlePlay(i, j)} key={j}>{cell === 0 ? "O" : cell === 1 ? "X" : ""}</td>)}
          </tr></tbody>)}
        </table>
      </div>
     {gameStatus &&<h3>{showWinner?`Winner: Player ${showWinner}`:"Result: Tie"  }</h3>}
      <h3>Game Status: {gameStatus?"Completed":"Inprogess"}</h3>
    </div>
  )
}
