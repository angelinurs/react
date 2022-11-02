import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

const configStore = configureStore({
    reducer : {
        user: userReducer
    }
});

export default configStore;