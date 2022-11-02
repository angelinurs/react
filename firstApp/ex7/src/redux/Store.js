import { configureStore } from '@reduxjs/toolkit'
import useReducer from './NumberSlice'

const configStore = configureStore({
    reducer : {
        Number : useReducer
    }
});

export default configStore;