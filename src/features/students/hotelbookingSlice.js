
// import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import AddTrips from "../../pages/AddTrips";


// const hotelbookingSlice = createSlice({
//     name: "bookings",
//     initialState: {
//         list: JSON.parse(localStorage.getItem("list")) || [],
//         isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
//     },
//     reducers: {
//         loginDetails: (state, action) => {
//             const { email, password } = action.payload
//             if (email == "admin@gmail.com" && password == "admin@123") {
//                 state.isLoggedIn = true
//                 localStorage.setItem("isLoggedIn", JSON.stringify(true))
//                 toast.success("Admin Logged In Successfully !");
//             } else {
//                 state.isLoggedIn = false
//                 localStorage.setItem("isLoggedIn", JSON.stringify(false))
//                 toast.error("Invalid Email Id or Password !")
//             }
//         },
//         toLogout: (state) => {
//             state.isLoggedIn = false;
//             localStorage.setItem("isLoggedIn", JSON.stringify(false))
//         },
//         addBookings: (state, action) => {
//             state.list.push({ id: nanoid(), ...action.payload })
//             localStorage.setItem("list", JSON.stringify(state.list))
//         },
//         addTrips: (state, action) => {
//             if(action.payload == undefined){
//                 return
//             }
//             state.list.push({ id: nanoid(), ...action.payload })
//             localStorage.setItem("list", JSON.stringify(state.list))

//         },
//         deleteBookings: (state, action) => {
//             const newTrip = state.list.filter((trip) => {
//                 return trip.id != action.payload
//             })
//             state.list = newTrip
//             localStorage.setItem("list", JSON.stringify(state.list))
//         },
//         updateBookings: (state, action) => {
//             const { id, ...data } = action.payload;
//             const idx = state.list.findIndex(trip => trip.id == id)
//             if (idx != -1) {
//                 state.list[idx] = { id, ...data };
//             }
//             localStorage.setItem("list", JSON.stringify(state.list))
//         }
//     }
// })

// export const { loginDetails, toLogout, addBookings, addTrips, deleteBookings, updateBookings } = bookingSlice.actions
// export default hotelbookingSlice.reducer
