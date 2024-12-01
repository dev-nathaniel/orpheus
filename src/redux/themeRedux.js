import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice ({
    name: 'theme',
    initialState: {
        theme: "dark",
        isFetching: false,
    },
    reducers: {
        changeThemeStart: (state)=>{
            state.isFetching=true
        },
        changeThemeSuccess: (state, action)=>{
            state.isFetching=false;
            state.theme=action.payload;
        }
    }
});

export const { changeThemeStart, changeThemeSuccess} = themeSlice.actions;
export default themeSlice.reducer;