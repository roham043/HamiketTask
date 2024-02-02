import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './features/data/dataSlice';
import modalReducer from './features/modal/modalSlice';
import imageSrcReducer from './features/image/imageSlice';

export const store = configureStore({
    reducer:{
        data: dataReducer,
        modal:modalReducer,
        image:imageSrcReducer
    }
})