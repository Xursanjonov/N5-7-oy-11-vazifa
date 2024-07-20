import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: JSON.parse(localStorage.getItem('profile')) || [],
}

const profileSlice = createSlice({
    name: 'profile-data',
    initialState,
    reducers: {
        getProfile: (state, action) => {
            state.value = action.payload;
            localStorage.setItem('profile', JSON.stringify(state.value))
        },

        editProfile: (state, action) => {
            state.value = action.payload
            localStorage.setItem('profile', JSON.stringify(state.value))
        }
    },
});

export const { getProfile, editProfile } = profileSlice.actions
export default profileSlice.reducer