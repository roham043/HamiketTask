import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    imageSrc:''
}

export const imageSlice = createSlice({
    name:'image',
    initialState,
    reducers:{
        changeSrcImage:(state,action)=>{state.imageSrc= action.payload}
    }
})

export const {changeSrcImage} = imageSlice.actions;
export default imageSlice.reducer;