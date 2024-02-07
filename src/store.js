import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modal/modalSlice';
import imageSrcReducer from './features/image/imageSlice';
import usersReducer from './features/users/usersSlice';

export const store = configureStore({
    reducer:{
        modal:modalReducer,
        image:imageSrcReducer,
        users:usersReducer
    }
})