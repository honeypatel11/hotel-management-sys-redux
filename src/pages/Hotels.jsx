import { hotelCard } from "../components/Hotelcard" 
import HotelCard from "../components/Hotelcard"     

const Hotels = () => {
    return (
        <section className="pt-[100px]">
            <div className="container mx-auto">
                <h3 className="text-center text-[#F29727] text-4xl font-semibold mb-8">Explore Hotel Packages</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {
                        hotelCard.map((hotel, idx) => (
                            <HotelCard
                                key={idx}
                                id={idx}
                                img={hotel.img}
                                name={hotel.name}
                                location={hotel.location}
                                description={hotel.description}
                                price={hotel.price}
                                rating={hotel.rating}
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
