import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    UserDataList:[]
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.UserDataList.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.UserDataList = state.UserDataList.filter((user) => user.id !== action.payload)
        },
        editUser: (state, action) => {
            // const updateUser = state.value.find((user) => user.id === action.payload.id);
            // if (updateUser) {
            //     updateUser.name = action.payload.name
            // }
            state.UserDataList.map((user)=>{
                if(user.id === action.payload.id.id){
                    user.fullname = action.payload.fullname
                    user.gender = action.payload.gender
                    user.birthday = action.payload.birthday
                    user.age = action.payload.age
                    user.image = action.payload.image

                }
            })
        }
    }
})

export const { addUser, deleteUser ,editUser} = userSlice.actions;
export default userSlice.reducer;