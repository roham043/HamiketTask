import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    setIsOpen:false
}

export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
       changeModal:(state,action)=>{state.setIsOpen=!state.setIsOpen} 
    }
})

export const {changeModal} = modalSlice.actions;
export default modalSlice.reducer;