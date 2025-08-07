import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <section className="bg-hero bg-cover bg-center h-screen flex items-center relative">

      <div className="absolute inset-0 bg-teal-900  z-0">
        <img src="img/newslide-01.jpeg" alt="" />
      </div>

      <div className="container mx-auto px-8 relative z-10">

        <h1 className="text-9xl md:text-7xl fw-bold text-white mb-6">
          Explore the <br /> World Now!
        </h1>


        <p className="text-lg md:text-xl text-white max-w-xl mb-10">
          Looking for your dream vacation destination but don't know where to start? With the help of our hotel agents, you can plan the trip of a lifetime with ease.
        </p>


        <form className="bg-white/90 backdrop-blur-md p-6 rounded-lg w-full max-w-4xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

            <div>
              <label className="block text-sm text-gray-700 mb-1">Check-In</label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-08-07"
                  className="w-full px-4 py-2 rounded border border-gray-300"
                />
                <IoIosArrowDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Check-Out</label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-08-08"
                  className="w-full px-4 py-2 rounded border border-gray-300"
                />
                <IoIosArrowDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Guests</label>
               <input
                  type="number"
                 
                  className="w-full px-4 py-2 rounded border border-gray-300"
                />
                <IoIosArrowDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
  
             
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
              >
                Check Availability
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
