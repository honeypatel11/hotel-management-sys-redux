
const Rooms = () => {
  return (
    <div className="font-sans">
     
      <div className="w-full h-[300px]">
        <img
          src="/img/slide-02.jpg"
          alt="Search Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

    
      <div className="bg-black text-white py-4 px-6 flex items-center justify-center gap-6 text-sm">
        <span className="opacity-70">Search</span>
        <span className="text-white">•</span>
        <span className="opacity-70">Booking</span>
        <span className="text-white">•</span>
        <span className="opacity-70">Checkout</span>
        <span className="text-white">•</span>
        <span className="opacity-70">Thank You</span>
      </div>

      

 
      <div className="px-4 py-10 flex flex-col lg:flex-row gap-10 justify-center">
     
        <div className="bg-black text-white p-6 w-full max-w-sm space-y-6">
          <div>
            <label className="block text-sm mb-1">All Branches</label>
            <select className="w-full bg-gray-800 text-white px-3 py-2">
              <option>All Branches</option>
              <option>Hotel Rome</option>
              <option>Hotel London</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>
              <p className="text-gray-400">Check-In</p>
              <p className="text-2xl font-bold">04</p>
              <p>Sep</p>
            </div>
            <div>
              <p className="text-gray-400">Check-Out</p>
              <p className="text-2xl font-bold">05</p>
              <p>Sep</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>
              <p className="text-gray-400">Guests</p>
              <p className="text-2xl font-bold">1</p>
            </div>
            <div>
              <p className="text-gray-400">Nights</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </div>

       
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
    
          <div className="border">
            <div className="relative">
              <img
                src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/asian/wp-content/uploads/sites/9/2023/07/room-01-1024x683.jpg"
                alt="Small Room"
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-black text-xs px-3 py-1">
                This is the last room at this price
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">Hotel Rome ★★★★★</p>
              <h3 className="text-xl font-semibold my-1">Small Room</h3>
              <p className="text-sm text-gray-500">👤 1 Guest | 📏 15 ft</p>
              <p className="text-gray-600 mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo.
              </p>
            </div>
          </div>

   
          <div className="border">
            <div className="relative">
              <img
                src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/asian/wp-content/uploads/sites/9/2023/07/room-02-1024x683.jpg"
                alt="Room with View"
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-black text-xs px-3 py-1">
                Only 2 Room Left at This Price
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">Hotel London ★★★★★</p>
              <h3 className="text-xl font-semibold my-1">Room with View</h3>
              <p className="text-sm text-gray-500">👥 4 Guests | 📏 40 ft</p>
              <p className="text-gray-600 mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
