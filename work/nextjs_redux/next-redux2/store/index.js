import {configureStore} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import reducer from './modules';

const isProduct = () => (process.env.NODE_ENV == 'production');

const makeStore = () => configureStore({
    reducer,
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: !isProduct,
});

export const wrapper = createWrapper( makeStore, { debug: isProduct });