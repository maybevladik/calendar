import React from 'react';
import styles from './Title.module.css';

const Navigation = (props) => {
    return(
        <div className = { styles.titleWrapper }>
            <span>Calendar View</span>
            <div className = { styles.navigationButton }>
                <button onClick = { props.onToday }>Month</button>
                <button onClick = { props.onBack }>Week</button>
                <button onClick = { props.onNext }>Day</button>
                <button>Agends</button>
            </div>
        </div>
    )
}

export default Navigation;