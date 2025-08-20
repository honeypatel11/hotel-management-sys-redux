import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const hotelSlice = createSlice({
    name: "hotels",
    initialState: {
        list: JSON.parse(localStorage.getItem("hotels")) || [],
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    },
    reducers: {
        loginAdmin: (state, action) => {
            const { email, password } = action.payload;
            if (email === "admin@gmail.com" && password === "admin@123") {
                state.isLoggedIn = true;
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                toast.success("Admin Logged In Successfully!");
            } else {
                state.isLoggedIn = false;
                localStorage.setItem("isLoggedIn", JSON.stringify(false));
                toast.error("Invalid Email or Password!");
            }
        },

        logoutAdmin: (state) => {
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn", JSON.stringify(false));
        },

        addHotel: (state, action) => {
            if (!action.payload) return;
            state.list.push({ id: nanoid(), ...action.payload });
            localStorage.setItem("hotels", JSON.stringify(state.list));
        },

        updateHotel: (state, action) => {
            const { id, ...data } = action.payload;
            const index = state.list.findIndex(hotel => hotel.id === id);
            if (index !== -1) {
                state.list[index] = { id, ...data };
                localStorage.setItem("hotels", JSON.stringify(state.list));
            }
        },

        deleteHotel: (state, action) => {
            state.list = state.list.filter(hotel => hotel.id !== action.payload);
            localStorage.setItem("hotels", JSON.stringify(state.list));
        }
    }
});

export const {
    loginAdmin,
    logoutAdmin,
    addHotel,
    updateHotel,
    deleteHotel
} = hotelSlice.actions;

export default hotelSlice.reducer;
