import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: null,
    filter: '',
    filterName: '',
    error: null
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        initUsers(state, action) {
            state.users = [...action.payload];
        },
        addUser(state, action) {
            state.users = [...state.users, action.payload];
        },
        setFilter(state, action) {
            state.filter = action.payload.term;
            state.filterName = action.payload.filterName;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})


export const {addUser, setFilter, initUsers, setError} = usersSlice.actions;
export default usersSlice.reducer;