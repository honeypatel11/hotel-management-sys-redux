import { useDispatch, useSelector } from "react-redux"
// import HotelsTable from "../components/HotelsTable"
import { useNavigate, useParams } from "react-router-dom"
import { hotelCard } from "../components/Hotelcard" // hotel dummy data
import { useEffect } from "react"
// import { addHotel } from "../features/hotels/hotelSlice"
import Hoteltable from "../components/Hoteltable"
import { addHotel } from "../features/students/hotelSlice"

const HotelsList = () => {
    const hotels = useSelector(store => store.hotels.list) // update slice name
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            const selectedHotel = hotelCard.find((item, idx) => idx == id)
            if (selectedHotel) {
                dispatch(addHotel(selectedHotel))
                navigate("/hotels")
            }
        }
        console.log(hotels);
        
    }, [id, dispatch, navigate])

    return (
        <section className="hotel pt-[120px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl text-[#F29727]">Hotel Details</h2>
                    <div>
                        <button
                            type="button"
                            onClick={() => navigate("/add-hotel")}
                            className="text-white bg-[#ff5d22] hover:bg-[#e24d14] font-medium rounded-md text-sm px-4 py-2 flex items-center gap-2 transition"
                        >
                            Add Hotel
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <Hoteltable hotels={hotels} />
                </div>
            </div>
        </section>
    )
}

export default HotelsList
