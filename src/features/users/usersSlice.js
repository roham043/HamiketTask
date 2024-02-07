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
        },
        
        editUser: (state, action) => {
            const updateUser = state.usersList.find(
                (user) => user._id === action.payload.id.id.id)
            if (updateUser) {
                updateUser.data.age = action.payload.data.age;
                updateUser.data.fullname = action.payload.data.fullname;
                updateUser.data.sex = action.payload.data.sex;
                updateUser.data.birthday = action.payload.data.birthday;
                updateUser.data.image = action.payload.data.image
            }
        }
    }
})

export const { addUser, deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;