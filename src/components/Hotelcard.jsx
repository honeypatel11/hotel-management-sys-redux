const HotelCard = ({ img, name, location, description, price, rating, rooms }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[300px]">
            <img src={img} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-[#11221C]">{name}</h2>
                <p className="text-sm text-gray-500 mb-1">{location}</p>
               
                <div className="flex justify-between items-center text-sm text-gray-600">
                   
                    <span>{rooms} rooms</span>
                </div>
                <p className="text-[#F29727] text-lg mt-2 font-bold">₹ {price} / night</p>
            </div>
        </div>
    )
}

export default HotelCard
