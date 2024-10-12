import { createSlice } from "@reduxjs/toolkit";

const premiumSlice = createSlice({
    name: "premium",
    initialState: {
        isPremium: false
    },
    reducers: {
        buyPremium: (state) =>{
            state.isPremium = true
        }
    }
})

export const {buyPremium} = premiumSlice.actions;
export default premiumSlice.reducer;