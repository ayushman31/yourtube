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

// to limit the bloating of our cache just limit the cache to [100]: LRU cache (least recently used)