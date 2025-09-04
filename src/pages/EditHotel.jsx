import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateHotel } from "../features/students/hotelSlice";

const EditHotel = () => {
  const [input, setInput] = useState({
    hotelName: "",
    location: "",
    rooms: "",
    price: "",
  });

  const [errors, setErrors] = useState({});
  const hotels = useSelector((store) => store.hotels.list);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const existingHotel = hotels.find((hotel) => hotel.id === id);
      if (!existingHotel) {
        navigate("/hotels");
        return;
      }
      setInput(existingHotel);
    }
  }, [id, hotels, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = {};

    if (!input.hotelName.trim()) {
      validateErrors.hotelName = "Enter Hotel Name!";
    }
    if (!input.location.trim()) {
      validateErrors.location = "Enter Location!";
    }
    if (!input.rooms || isNaN(input.rooms)) {
      validateErrors.rooms = "Enter valid number of Rooms!";
    }
    if (!input.price || isNaN(input.price)) {
      validateErrors.price = "Enter valid Price!";
    }

    setErrors(validateErrors);
    if (Object.keys(validateErrors).length > 0) return;

    // Update hotel
    dispatch(updateHotel({ ...input, rooms: Number(input.rooms), price: Number(input.price) }));
    navigate("/hotels");
  };

  return (
    <div className="edit-hotel min-h-screen flex items-center justify-center bg-[#11221C] pt-[100px] px-4">
      <div className="hidden lg:block w-1/2">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/230241575.jpg?k=a075b64e42b369450c7914ee98a24deaacead983d5e9497fc6fea553b23e5ca7&o="
          alt="Hotel"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full bg-white rounded-md max-w-md p-8 shadow-lg">
          <h2 className="mb-5 text-3xl text-[#18564c] font-bold">Edit Hotel</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Hotel Name */}
            <div>
              <label htmlFor="hotelName" className="block mb-1 text-sm font-medium text-gray-900">
                Hotel Name:
              </label>
              <input
                type="text"
                id="hotelName"
                value={input.hotelName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
              />
              {errors.hotelName && <p className="text-red-500 text-sm mt-1">{errors.hotelName}</p>}
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block mb-1 text-sm font-medium text-gray-900">
                Location:
              </label>
              <input
                type="text"
                id="location"
                value={input.location}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            {/* Rooms */}
            <div>
              <label htmlFor="rooms" className="block mb-1 text-sm font-medium text-gray-900">
                Rooms:
              </label>
              <input
                type="number"
                id="rooms"
                value={input.rooms}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
              />
              {errors.rooms && <p className="text-red-500 text-sm mt-1">{errors.rooms}</p>}
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block mb-1 text-sm font-medium text-gray-900">
                Price per Night:
              </label>
              <input
                type="number"
                id="price"
                value={input.price}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>

            <button
              type="submit"
              className="text-white bg-[#103535] hover:bg-[#1d413a] font-medium rounded-lg text-sm w-full px-5 py-2.5"
            >
              Update Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditHotel;
