const Contact = () => {
    const cardContent = [
        {
            image: "https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/asian/wp-content/uploads/sites/9/2023/07/square-02.jpg",
            title: "Reception Always Open",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            image: "https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/asian/wp-content/uploads/sites/9/2023/07/square-01.jpg",
            title: "Online Reservations",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ];

    return (
        <section className="pt-[100px] flex flex-col items-center w-full">

            <div
                className="mb-5 w-full h-[300px] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hostel/wp-content/uploads/sites/9/2023/07/parallax-05.jpg')" }} >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-semibold">Contact</h1>
                </div>
            </div>


            <div className="w-full max-w-7xl px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cardContent.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition"
                        >
                            <div className="w-[70px] h-[70px] min-w-[70px] rounded-full overflow-hidden mr-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
