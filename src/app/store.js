import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/students/hotelSlice"; // ✅ update this path if needed

const store = configureStore({
    reducer: {
        hotels: hotelReducer,
    },
});

export default store;
