import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
const store = configureStore ({
    reducer:rootReducer, 
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    initialState
})

export default store;