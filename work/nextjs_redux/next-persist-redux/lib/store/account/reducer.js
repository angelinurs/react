import { CHECK_IN, CHECK_OUT } from "./type";

const initialState = {
    account: {},
};

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        // case HYDRATE:
        //     return {
        //         ...state,
        //         ...action.payload
        //     };
        case CHECK_IN:
            return {
                ...state, account: action.payload
            };
        case CHECK_OUT:
            return {
                ...state, account: action.payload
            };
        default:
            return state;
    }
}

export default reducer;