import React from 'react';
import styles from './show.module.css';
import moment from 'moment';
import AddEvent from '../addEvent/AddEvent';

const ShowDate = (props) => {

    let startDayOfWeek = props.startDayOfWeek.clone();
    let startDay = startDayOfWeek.subtract(1, 'day');
    let masOfDay = [...Array(35)].map( () => startDay.add(1, 'day').clone());

    const currentDay = (day) => moment().isSame(day, 'day');


    return (
        <div>
        <div className = { styles.daysOfWeek }>
            <span>SUN</span><span>MON</span>
            <span>TUE</span><span>WED</span>
            <span>THU</span><span>FRI</span>
            <span>SAT</span>
        </div>
        {props.isOpen ? <AddEvent /> : 
            <div className = { styles.numbersWrapper }>
                {masOfDay.map( (day) => 
                   <div key = { day.format('DDMMYYYY') } className = { styles.number }>
                   {currentDay(day) ? 
                        <div onClick = { props.onClickEvent } className = { styles.currentNumber }> 
                            <div className = { styles.numberWrapper } >
                                <span className = { styles.numberPosition }>
                                    {day.format('D')}
                                </span>
                            </div>
                            { props.isOpen && <AddEvent /> } 
                        </div>
                    :
                        <div onClick = { props.onClickEvent } className = { styles.number }>  
                            <div className = { styles.numberWrapper } >
                                <span className = { styles.numberPosition }>
                                    {day.format('D')}
                                </span>
                            </div>
                        </div>
                   }
                    </div>
                )}
            </div>
            }
        </div>
    )
}

export default ShowDate;