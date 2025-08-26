import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify"
import HotelsList from "./pages/HotelsList" 
import EditHotel from "./pages/EditHotel"
import AddHotel from "./pages/AddHotel"
import ProtectedRoute from "./components/ProtectRoute"


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<ProtectedRoute Component={Login} />} />
                <Route path="/hotels" element={<ProtectedRoute Component={HotelsList} />} />
                <Route path="/hotels/:id" element={<ProtectedRoute Component={HotelsList} />} />
                <Route path="/add-hotel" element={<ProtectedRoute Component={AddHotel} />} />
                <Route path="/edit-hotel/:id" element={<ProtectedRoute Component={EditHotel} />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App
