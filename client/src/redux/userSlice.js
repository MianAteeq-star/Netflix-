import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null
}
const UserSlice = createSlice({

    name: 'user',

    initialState,

    reducers: {

        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }

    }
})

export const { setUser,clearUser } = UserSlice.actions
export default UserSlice.reducer

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     clearUser: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;