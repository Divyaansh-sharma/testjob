import React, { useState } from 'react'
import styles from './Mcq.module.css'

const BottomBar = ({ countCorrect }) => {
    // const [score, setScore] = useState(0);
    console.log(countCorrect, 'ttttttttt')
    const score = countCorrect * 100 / 20;


    return (
        <div className={styles.bar}>
            <div style=
                {{
                    width: `${countCorrect * 2}%`, backgroundColor: 'black', height: '40px'
                }} ></div>
            {`You scored ${score}% out of 100% `}
        </div>
    )
}

export default BottomBar
