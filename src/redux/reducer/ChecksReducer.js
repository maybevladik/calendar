const IS_OPEN = 'IS_OPEN';

let initialState = {
    isOpen: false
}

const ChecksReducer = (state = initialState, action) => {
    switch(action.type){
        case IS_OPEN:
            return {
                ...state,
                isOpen: action.isOpen
            };
        default: 
        return state
    }
}

export const isOpenChange = (isOpen) => ({
    type: IS_OPEN, 
    isOpen: isOpen
});

export default ChecksReducer;