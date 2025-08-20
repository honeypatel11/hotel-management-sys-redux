const Home = () => {
    return (
        <div className="md:p-[25px] overflow-hidden">
            <section className="back-color-image md:h-[90vh] sm:h-screen md:rounded-2xl overflow-hidden home-section h-screen pt-32">
                <div className="bg-img">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center h-[50vh]">
                            <h1 className="text-center text-white text-7xl capitalize">
                                <span className="capitalize text-8xl">Find the</span> <br />
                                perfect hotel stay
                            </h1>
                            <p className="text-center mt-20 text-white text-2xl">
                                Over <span>5,000+</span> luxury and budget hotels worldwide
                            </p>
                        </div>

                        <div className="flex justify-center flex-wrap">
                            <form className="mt-12 w-10/12 xl:flex hidden bg-white gap-4 rounded-xl p-4 justify-between flex-wrap items-center">
                                {/* Location */}
                                <div className="flex items-center gap-3 border-r xl:p-0 p-4 xl:w-3/12 md:w-6/12 w-full">
                                    <i className="bi bi-geo-alt text-lg text-gray-500"></i>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">Location</label>
                                        <select className="text-sm font-semibold focus:outline-none bg-transparent">
                                            <option value="">Choose city</option>
                                            <option value="newyork">New York</option>
                                            <option value="paris">Paris</option>
                                            <option value="tokyo">Tokyo</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Room Type */}
                                <div className="flex items-center gap-3 border-r xl:p-0 p-4 xl:w-2/12 md:w-6/12 w-full">
                                    <i className="bi bi-building text-lg text-gray-500"></i>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">Room Type</label>
                                        <select className="text-sm font-semibold focus:outline-none bg-transparent">
                                            <option>Standard</option>
                                            <option>Deluxe</option>
                                            <option>Suite</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Check-in / Check-out */}
                                <div className="flex items-center gap-3 border-r xl:p-0 p-4 xl:w-3/12 md:w-6/12 w-full">
                                    <i className="bi bi-calendar-event text-lg text-gray-500"></i>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">Dates</label>
                                        <input type="date" className="text-sm font-semibold focus:outline-none bg-transparent" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">to</label>
                                        <input type="date" className="text-sm font-semibold focus:outline-none bg-transparent" />
                                    </div>
                                </div>

                                {/* Guests */}
                                <div className="flex items-center gap-3 border-r xl:p-0 p-4 xl:w-2/12 md:w-6/12 w-full">
                                    <i className="bi bi-person text-lg text-gray-500"></i>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">Guests</label>
                                        <select className="text-base font-medium focus:outline-none">
                                            <option>1 Guest</option>
                                            <option>2 Guests</option>
                                            <option>3+ Guests</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="flex justify-center w-2/12">
                                    <button type="submit" className="bg-[#73B458] hover:bg-[#5c9c3f] text-white flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300">
                                        Search <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
