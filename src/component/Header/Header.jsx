import React from 'react'
import styles from "./header.module.css"
export default function Header({currentScreen}) {
  return (
    <div className={styles.container}>
      <h1>{currentScreen}</h1>
    </div>
  )
}
