import React from 'react'
import styles from './Mcq.module.css'

const ProgressBar = ({ question }) => {

    return (
        <div style={{ width: `${question * 5}%`, height: '20px', backgroundColor: 'gray' }}>

        </div>
    )
}

export default ProgressBar
