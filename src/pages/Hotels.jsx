import { hotelCard } from "../components/Hotelcard" 
import HotelCard from "../components/Hotelcard"     

const Hotels = () => {
    return (
        <section className="pt-[100px] container mx-auto">
            <div className="">
                <h3 className="text-center text-[#F29727] text-4xl font-semibold mb-8">Explore Hotel Packages</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {
                        hotelCard.map((hotel, idx) => (
                            <HotelCard
                                key={idx}
                                id={idx}
                                name={hotel.name}
                                location={hotel.location}  
                                price={hotel.price}       
                                rooms={hotel.rooms}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Hotels
