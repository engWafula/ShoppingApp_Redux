import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show:null
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        showNotification: (state, action) => {
            state.show = {
                type: action.payload.type,
                message: action.payload.message,
                open:action.payload.open
            }
        }
    }
})

export const { showNotification } = notificationSlice.actions
export default notificationSlice.reducer