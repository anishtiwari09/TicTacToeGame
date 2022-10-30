import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div >
        <Link to="/">Todo</Link>
      </div>
      <div>
      <Link to="/game">Tic Tac Toe</Link>
      </div>
    </div>
  )
}
