import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './features/data/dataSlice';
import modalReducer from './features/modal/modalSlice';
import imageSrcReducer from './features/image/imageSlice';
import usersReducer from './features/users/usersSlice';

export const store = configureStore({
    reducer:{
        data: dataReducer,
        modal:modalReducer,
        image:imageSrcReducer,
        users:usersReducer
    }
})