import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    fullname:'',
    sex:'',
    birthday:'',
    age:0,
    image:FileList
}

export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
       changeName:(state,action) =>{state.fullname=action.payload},
       changeSex:(state,action) =>{state.sex=action.payload},
       changebirthday:(state,action) =>{state.birthday=action.payload},
       changeage:(state,action) =>{state.age=action.payload},
       changeImage:(state,action) =>{state.image=action.payload},
    }
})

export const {changeName,changeImage,changeSex,changeage,changebirthday} = dataSlice.actions;
export default dataSlice.reducer;