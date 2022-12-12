import { 
    createStore, 
    applyMiddleware, 
    compose
} from 'redux';

import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './module';

// NextJS 에서는 React 와 다르게 
// ReactDOM.render(<App />, document.getElementById('root')); 가 존재하지 않으므로 
// wrapper를 만들고, 이를 _app.js에 감싸주면 됩니다.

// Redux Devtools 사용시 service 상태가 아닌,
// develope 상태일때만 적용.
const isProduction = process.env.NODE_ENV == "production";

// middleware ( logger, thunk, saga.. etc )
// 사용 여부를 결정함.
const makeStore = () => {
    const enhancer = isProduction 
        ? compose(applyMiddleware(thunk) )
        : composeWithDevTools( applyMiddleware( thunk ));

    const store = createStore( rootReducer, enhancer );

    return store;
};

const wrapper = createWrapper( makeStore, { debug: !isProduction });

export default wrapper;