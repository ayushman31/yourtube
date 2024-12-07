import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        isLoginPage: false,
        
    },
    reducers: {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        toggleLoginPage: (state) => {
            state.isLoginPage = !state.isLoginPage;
        }
    }
})


export const {toggleMenu , closeMenu , toggleLoginPage} = appSlice.actions;
export default appSlice.reducer;