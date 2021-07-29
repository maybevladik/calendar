import React from 'react';
import styles from './AddEvent.module.css';
import { connect } from 'react-redux';
import { isOpenChange } from '../../redux/reducer/ChecksReducer';
import { addEvent } from '../../redux/reducer/AddEventReducer';

const AddEvent = (props) => {

    let newEventName = React.createRef();
    let newEventNotes = React.createRef();

    const onSave = () => {
        let eventName = newEventName.current.value;
        let eventNotes = newEventNotes.current.value;
        
        props.addEvent(Math.floor(new Date().getTime()/1000.0), eventName, eventNotes);
        props.isOpenChange(false);
    }

    const onCancel = () => {
        props.isOpenChange(false);
    }

    return(
        <div className = { styles.wrapper }>
            <div className = { styles.wrapperContainer }>
                <div className = { styles.header } ></div>
                <div className = { styles.body }>
                    <div>
                        <div className = { styles.titleItem }>
                            <span>event name</span>
                        </div>
                        <input ref = { newEventName }  />
                        <hr></hr>
                    </div>
                    <div>
                        <div className = { styles.titleItem }>
                            <span>event data</span>
                        </div>
                        <input ref = { newEventNotes } />
                        <hr></hr>
                    </div>
                    <div>
                        <div className = { styles.titleItem }>
                            <span>event time</span>
                        </div>
                        <input ref = { newEventNotes } />
                        <hr></hr>
                    </div>
                    <div>
                        <div className = { styles.titleItem }>
                            <span>notes</span>
                        </div>
                        <input ref = { newEventNotes } />
                        <hr></hr>
                    </div>
                    <div></div>
                </div>
                <div className = { styles.footer } >
                    <span>
                        <button className = { styles.cancel } onClick = { onCancel } >Cancel</button>
                    </span>
                    <span>
                        <button onClick = { onSave }>Save</button>
                    </span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ });  

export default connect( mapStateToProps, { isOpenChange, addEvent })(AddEvent);