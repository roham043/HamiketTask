import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    usersList: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => { state.usersList.push(action.payload) },
        deleteUser: (state, action) => {
            state.usersList = state.usersList.filter(
                (item) => item._id !== action.payload)
        }
    }
})

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;