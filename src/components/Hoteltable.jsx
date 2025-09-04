import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteHotel } from "../features/students/hotelSlice"


const HotelsTable = ({ hotels }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteHotel(id)) 
    }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Hotel Name</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3">Rooms</th>
                            
                            <th scope="col" className="px-6 py-3">Price/Night</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hotels.map((hotel) => (
                                <tr key={hotel.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {hotel.hotelName}
                                    </td>
                                    <td className="px-6 py-4">{hotel.location}</td>
                                    <td className="px-6 py-4">{hotel.rooms}</td>
                                   
                                    <td className="px-6 py-4">${Number(hotel.price).toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <Link
                                                to={`/edit-hotel/${hotel.id}`}
                                                className="text-base text-green-600 hover:underline"
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(hotel.id)}
                                                className="text-base text-red-600 hover:underline"
                                            >
                                                <i className="bi bi-trash3-fill"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HotelsTable
