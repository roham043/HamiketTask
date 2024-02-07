import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modal/modalSlice';
import imageSrcReducer from './features/image/imageSlice';
import usersReducer from './features/users/usersSlice';
import editFormModalReducer from './features/modal/EditFormModalSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        image: imageSrcReducer,
        users: usersReducer,
        editFormModal: editFormModalReducer
    }
})