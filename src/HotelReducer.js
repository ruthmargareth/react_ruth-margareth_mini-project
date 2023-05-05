import { createSlice } from "@reduxjs/toolkit";
import { HotelList } from "./pages/admin/jsx/HotelList";

const hotelSlice = createSlice ({
    name: "hotel",
    initialState: [],
    reducers: {
        addHotel: (state, action) => {
            state.push(action.payload)
        },
        updateHotel: (state, action) => {
            const {
                id, 
                ownerName,
                ownerPhone,
                petName,
                species,
                breed,
                gender,
                weight,
                booking,
                pickup
            } = action.payload
            const uu = state.find(hotel => hotel.id == id);
            if (uu) {
                uu.ownerName = ownerName;
                uu.ownerPhone = ownerPhone;
                uu.petName = petName;
                uu.species = species;
                uu.breed = breed;
                uu.gender = gender;
                uu.weight = weight;
                uu.booking = booking;
                uu.pickup = pickup;
            }
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
export const {addHotel, updateHotel, deleteHotel} = hotelSlice.actions;