import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";



import  rootindex  from "./saga";
import rootReducers from "./rootreducer";
import { applyMiddleware, createStore } from "redux";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootindex)

export default store