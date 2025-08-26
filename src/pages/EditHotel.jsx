import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateHotel } from "../features/students/hotelSlice";


const EditHotel = () => {
    const [input, setInput] = useState({
        hotelName: '',
        location: '',
        rooms: '',
        price: '',
        category: '',
    });

    const [errors, setErrors] = useState({});

    const hotels = useSelector(store => store.hotels.list);

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const existingHotel = hotels.find(hotel => hotel.id === id);
            if (!existingHotel) {
                navigate("/hotels");
                return;
            }
            setInput(existingHotel);
        }
    }, [id]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
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
            validateErrors.category = "Select Category!";
        }

        if (input.price.trim() === "") {
            validateErrors.price = "Enter Price!";
        }

        setErrors(validateErrors);

        if (Object.keys(validateErrors).length > 0) return;

        dispatch(updateHotel(input));
        navigate("/hotels");
    };

    return (
        <div className="edit-hotel min-h-screen flex items-center justify-center bg-[#11221C] pt-[100px]">
            <div className="hidden lg:block">
                <img src="/images/shape3.png" className="scale-x-[-1]" alt="shape" />
            </div>
            <div className="w-full lg:w-1/2 flex item-center justify-center md:p-5">
                <div className="w-full bg-white md:rounded-md max-w-md p-8">
                    <div className="container mx-auto">
                        <h2 className="mb-5 text-3xl text-[#F29727]">Edit Hotel</h2>
                        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="hotelName" className="block mb-2 text-sm font-medium text-gray-900">Hotel Name:</label>
                                <input type="text" onChange={handleChange} value={input.hotelName} id="hotelName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                                {errors.hotelName && <p className="text-red-500 text-sm mt-1">{errors.hotelName}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location:</label>
                                <input type="text" onChange={handleChange} value={input.location} id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="rooms" className="block mb-2 text-sm font-medium text-gray-900">Rooms:</label>
                                <input type="number" onChange={handleChange} value={input.rooms} id="rooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                                {errors.rooms && <p className="text-red-500 text-sm mt-1">{errors.rooms}</p>}
                            </div>

                            <div className="mb-5">
                                <div className="flex flex-wrap sm:flex-nowrap gap-4">
                                    <label className="flex items-center gap-1">
                                        <input id="category" type="radio" name="category" value="3-star"
                                            onChange={handleChange} checked={input.category === "3-star"}
                                            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                        />
                                        3-Star
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input id="category" type="radio" name="category" value="4-star"
                                            onChange={handleChange} checked={input.category === "4-star"}
                                            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                        />
                                        4-Star
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input id="category" type="radio" name="category" value="5-star"
                                            onChange={handleChange} checked={input.category === "5-star"}
                                            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                        />
                                        5-Star
                                    </label>
                                </div>
                                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price per Night:</label>
                                <input type="number" onChange={handleChange} value={input.price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                            </div>

                            <button type="submit" className="text-white bg-[#F29727] hover:bg-[#e47e02] focus:ring-4 focus:outline-none focus:ring-orange-100 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                                Update Hotel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default EditHotel;
