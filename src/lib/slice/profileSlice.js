import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: JSON.parse(sessionStorage.getItem("role-admin")) || {},
}


const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getProfile: (state, action) => {
            state.value = action.payload;
            sessionStorage.setItem("role-admin", JSON.stringify(state.value))
        },
        setProfile: (state, { payload }) => {
            state.value = payload;
        },
    },
});

export const { getProfile, setProfile } = profileSlice.actions;
export default profileSlice.reducer;