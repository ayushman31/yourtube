import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload)    //try to do this using spread operator (es6 way)
        }
    }
    
});


export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;