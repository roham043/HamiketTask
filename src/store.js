import {configureStore} from '@reduxjs/toolkit';
import userReducer from './feacture/userSlice';

export const store = configureStore({
    reducer:{
        users:userReducer
    }
})