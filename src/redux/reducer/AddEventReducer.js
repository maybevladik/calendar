const ADD_EVENT = 'ADD_EVENT';

let initialState = [ ]

const AddEventReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_EVENT:
            return [
                ...state,
                {
                    id: action.id,
                    eventName: action.eventName,
                    notes: action.notes
                }
            ];
        default:
            return state;
    }
}

 export const addEvent = (id, eventName, notes) => ({
    type: ADD_EVENT,
    id: id,
    eventName: eventName,
    notes: notes
});

export default AddEventReducer;