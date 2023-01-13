import React from 'react'
import styles from './Mcq.module.css'
import Rating from '@mui/material/Rating';

const Topbar = (props) => {

    return (
        <div>
            <p className={styles.para}>
                Question  {props.question} of {props.length - 1}
            </p>

            <div className={styles.categories}>
                {props.categories
                    .replaceAll('%', ' ')
                    .replaceAll('3A', ' ')
                    .replaceAll('20', ' ')}
            </div>
            <div className={styles.readby}>
                <Rating
                    sx={{ color: 'black', marginLeft: '420px', marginTop: '20px' }}
                    name="read-only"
                    value={props.star} readOnly
                />
            </div>

        </div>
    )
}

export default Topbar
