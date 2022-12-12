import { CHECK_IN, CHECK_OUT } from "./type";

export const checkin = (checkinState) => ( dispatch ) => {
    return dispatch({
        type: CHECK_IN,
        payload: checkinState
    });
};

export const checkout = () => ( dispatch ) => {
    return dispatch({
        type: CHECK_OUT,
        payload: {}
    });
};