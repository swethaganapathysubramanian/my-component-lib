import React from 'react'
import styles from './styles.module.css'
import Input from './Input'
import Card from './Card'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ExampleButton = ({ label }) => {
  return <button className={styles.button}> {label} </button>
}

export const ExampleText = ({ text, color }) => {
  return <h4 style={{ color }}>{text}</h4>
}

export { Input, Card }
