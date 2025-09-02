import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../features/students/hotelSlice";

const AddHotel = () => {
    const [input, setInput] = useState({
        hotelName: '',
        location: '',
        rooms: '',
        price: '',
        category: '',
    });

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value, name, type } = e.target;
        if (type === "radio") {
            setInput({ ...input, [name]: value });
        } else {
            setInput({ ...input, [id]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validateErrors = {};

        if (input.hotelName.trim() === "") {
            validateErrors.hotelName = "Enter Hotel Name!";
        }

        if (input.location.trim() === "") {
            validateErrors.location = "Enter Location!";
        }

        if (input.rooms.trim() === "") {
            validateErrors.rooms = "Enter Number of Rooms!";
        }

        if (input.category.trim() === "") {
            validateErrors.category = "Select Hotel Category!";
        }

        if (input.price.trim() === "") {
            validateErrors.price = "Enter Price!";
        }

        setErrors(validateErrors);

        if (Object.keys(validateErrors).length > 0) return;

        dispatch(addHotel(input));
        navigate("/hotels");
    };

    return (
        <div className="min-h-screen bg-[#11221C] pt-[80px] px-4 flex items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
               
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto">
                    <img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/230241575.jpg?k=a075b64e42b369450c7914ee98a24deaacead983d5e9497fc6fea553b23e5ca7&o="
                        alt="Hotel"
                        className="w-full h-full object-cover"
                    />
                </div>

          
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center pt-5">
                    <h2 className="mb-6 text-3xl text-center font-bold text-[#357c73]">Add a Hotel</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                     
                        <div>
                            <label htmlFor="hotelName" className="block mb-1 text-sm font-medium text-gray-700">Hotel Name:</label>
                            <input
                                type="text"
                                id="hotelName"
                                value={input.hotelName}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a9c73] transition"
                            />
                            {errors.hotelName && <p className="text-red-500 text-sm mt-1">{errors.hotelName}</p>}
                        </div>

                      
                        <div>
                            <label htmlFor="location" className="block mb-1 text-sm font-medium text-gray-700">Location:</label>
                            <input
                                type="text"
                                id="location"
                                value={input.location}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a9c73] transition"
                            />
                            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                        </div>

                     
                        <div>
                            <label htmlFor="rooms" className="block mb-1 text-sm font-medium text-gray-700">Rooms:</label>
                            <input
                                type="number"
                                id="rooms"
                                value={input.rooms}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a9c73] transition"
                            />
                            {errors.rooms && <p className="text-red-500 text-sm mt-1">{errors.rooms}</p>}
                        </div>

                        <div>
                            <span className="block mb-1 text-sm font-medium text-gray-700">Category:</span>
                            <div className="flex flex-wrap gap-5">
                                {["3-star", "4-star", "5-star"].map((value) => (
                                    <label key={value} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={value}
                                            checked={input.category === value}
                                            onChange={handleChange}
                                            className="accent-[#28704a] w-4 h-4"
                                        />
                                        <span className="text-gray-700">{value}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                        </div>

                        <div>
                            <label htmlFor="price" className="block mb-1 text-sm font-medium text-gray-700">Price per Night:</label>
                            <input
                                type="number"
                                id="price"
                                value={input.price}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a9c73] transition"
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#2e7460] hover:bg-[#388353] text-white py-3 rounded-lg font-semibold text-sm transition duration-300"
                        >
                            Add Hotel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHotel;
