import { createSlice } from "@reduxjs/toolkit";

const groomingSlice = createSlice ({
    name: "grooming",
    initialState: [],
    reducers: {
        addGrooming: (state, action) => {
            state.push(action.payload)
        },
        updateGrooming: (state, action) => {
            const {
                id, 
                ownerName,
                ownerPhone,
                petName,
                species,
                breed,
                gender,
                weight,
                packet,
                date,
                time
            } = action.payload
            const uu = state.find(grooming => grooming.id == id);
            if (uu) {
                uu.ownerName = ownerName;
                uu.ownerPhone = ownerPhone;
                uu.petName = petName;
                uu.species = species;
                uu.breed = breed;
                uu.gender = gender;
                uu.weight = weight;
                uu.packet = packet;
                uu.date = date;
                uu.time = time;
            }
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
export const {addGrooming, updateGrooming, deleteGrooming} = groomingSlice.actions;