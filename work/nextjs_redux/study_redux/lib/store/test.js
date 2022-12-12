
// Action Types
const TEST = 'TEST';

// Action Creator
export const testAction = (text) => ({
    type: TEST, text
})

// Initialize State
const initialState = [];

// Reducer
const test = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TEST:
            return [...state, action.text ];

        default:
            return state;
    }
} 

export default test;