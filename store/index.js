import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import usersReducer from './usersSlice';


const reducer = {
    users: usersReducer
}

const store = () => configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export const wrapper = createWrapper(store);
