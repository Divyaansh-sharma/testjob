import React, { useState } from 'react'
import styles from './Mcq.module.css'
import Rating from '@mui/material/Rating';
// hard easy medium




const Topbar = (props) => {

    const [value, setValue] = React.useState(0);


    return (
        <div>
            <p className={styles.para}>Question  {props.question} of {props.length}</p>

            <div className={styles.categories}>{props.categories.replaceAll('%', ' ')}</div>
            <div className={styles.readby}>
                <Rating sx={{ color: 'black', marginLeft: '420px', marginTop: '20px' }} name="read-only" value={props.star} readOnly />
            </div>

        </div>
    )
}

export default Topbar
