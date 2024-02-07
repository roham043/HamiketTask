import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    setIsOpen:false
}

export const EditFormModalSlice = createSlice({
    name:'EditFormModal',
    initialState,
    reducers:{
       changeModal:(state,action)=>{state.setIsOpen=!state.setIsOpen} 
    }
})

export const {changeModal} = EditFormModalSlice.actions;
export default EditFormModalSlice.reducer;