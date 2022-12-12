import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

// 설치를 마친 뒤, rootReducer부터 정의해줍니다.
const rootReducer = (state, action ) => {
    switch( action.type ) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            };

        default:
            return combineReducers( {test,} )(state, action);
            
    }
};

export default rootReducer;