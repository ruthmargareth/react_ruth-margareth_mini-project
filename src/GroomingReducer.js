import { createSlice } from "@reduxjs/toolkit";

const groomingSlice = createSlice ({
    name: "grooming",
    initialState: [],
    reducers: {
        addGrooming: (state, action) => {
            state.push(action.payload)
        },
        deleteGrooming: (state, action) => {
            const {id} = action.payload
            const uu = state.find(grooming => grooming.id == id);
            if (uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export default groomingSlice.reducer;
export const {addGrooming, deleteGrooming} = groomingSlice.actions;