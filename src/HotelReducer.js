import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice ({
    name: "hotel",
    initialState: [],
    reducers: {
        addHotel: (state, action) => {
            state.push(action.payload)
        },
        deleteHotel: (state, action) => {
            const {id} = action.payload
            const uu = state.find(hotel => hotel.id == id);
            if (uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export default hotelSlice.reducer;
export const {addHotel, deleteHotel} = hotelSlice.actions;