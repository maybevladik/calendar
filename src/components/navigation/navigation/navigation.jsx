import React from 'react';
import styles from './navigation.module.css';
import moment from 'moment';

const Navigation = (props) => {
    return(
        <div className = { styles.navigationWrapper }>
            <div className = { styles.navigationButton }>
                <button onClick = { props.onToday }>Today</button>
                <button onClick = { props.onBack }>Back</button>
                <button onClick = { props.onNext }>Next</button>
            </div>
            <div className = { styles.monthAndYear }>
                <span className = { styles.month }>
                    { props.day.format('MMMM') }
                </span>
                <span>
                    { props.day.format('YYYY') }
                </span>
            </div>
        </div>
    )
}

export default Navigation;