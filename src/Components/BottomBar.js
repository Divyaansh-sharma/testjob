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
                    width: `${countCorrect * 4}%`, maxWidth: '70%', backgroundColor: 'black', height: '40px'
                }} ></div>
            <p>
                {`You scored ${score} out  of 100 `}

            </p>
        </div>
    )
}

export default BottomBar
