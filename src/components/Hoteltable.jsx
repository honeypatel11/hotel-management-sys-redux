import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteHotel } from "../features/students/hotelSlice";

const HotelsTable = ({ hotels }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteHotel(id));
  };

  return (
    <div className="font-poppins p-4  ">
      <div className="relative overflow-x-auto shadow-xl sm:rounded-xl border border-gray-200 ">
        <table className="w-full text-sm text-left text-gray-600 ">
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-gray-100 to-gray-200">
            <tr>
              <th scope="col" className="px-6 py-4">Hotel Name</th>
              <th scope="col" className="px-6 py-4">Location</th>
              <th scope="col" className="px-6 py-4">Rooms</th>
              <th scope="col" className="px-6 py-4">Price/Night</th>
              <th scope="col" className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr
                key={hotel.id}
                className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                  {hotel.hotelName}
                </td>
                <td className="px-6 py-4">{hotel.location}</td>
                <td className="px-6 py-4">{hotel.rooms}</td>
                <td className="px-6 py-4 font-semibold text-teal-700">
                  ${Number(hotel.price).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-5">
                    <Link
                      to={`/edit-hotel/${hotel.id}`}
                      className="text-green-600 hover:text-green-800 transition transform hover:scale-110"
                      title="Edit Hotel"
                    >
                      <i className="bi bi-pencil-square text-lg"></i>
                    </Link>
                    <button
                      onClick={() => handleDelete(hotel.id)}
                      className="text-red-600 hover:text-red-800 transition transform hover:scale-110"
                      title="Delete Hotel"
                    >
                      <i className="bi bi-trash3-fill text-lg"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {hotels.length === 0 && (
          <div className="p-6 text-center text-gray-700 text-sm">
            No hotels available. Please add one.
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelsTable;
