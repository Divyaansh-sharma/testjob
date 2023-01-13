import React from 'react'

const ProgressBar = ({ question }) => {

    return (
        <div
            style={{ width: `${question * 5.5}%`, height: '20px', backgroundColor: 'gray' }}>
        </div>
    )
}

export default ProgressBar
