import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false,
        emails: null,
        selectedEmail: null,
        searchText: "",
        user:null,

    },
    reducers: {
        //multiple action
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setSelectedEmail: (state, action) => {
            state.selectedEmail = action.payload;
        },

        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setuser: (state, action) => {
            state.user = action.payload;
        }

    }
});

export const { setOpen, setEmails, setSelectedEmail, setSearchText, setuser } = appSlice.actions;
export default appSlice.reducer;