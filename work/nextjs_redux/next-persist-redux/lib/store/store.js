import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import storage from "./sync_storage";

const combinedReducer =  combineReducers({
    account,
});

const bindMiddleware = (middleware) => {
    return (process.env.NODE_ENV !== 'production') 
            ? composeWithDevTools( applyMiddleware( ...middleware ) )
            : compose( applyMiddleware( ...middleware ) ); 
};

const makeStore = ({ isServer }) => {
    // isServer ? ssr 인지 window 인지에 따라 다름.
    if ( isServer ) {
        return createStore( combineReducers, bindMiddleware([logger]) );
    } 

    const { persistReducer, persistStore } = require( 'redux-persist' );

    const persistConfig = {
        key: 'auth',
        // `account` will be persisted
        whitelist : ['account'],
        storage,
    };

    const persistedReducer = persistReducer( persistConfig, combinedReducer);

    const store = createStore(
        persistedReducer,
        bindMiddleware([logger])
    );

    // persistor Object 를 생성하여, store object 에 할당
    store.__persistor = persistStore( store );

    return store;
};

export const wrapper = createWrapper( makeStore );

