// import ContactCard from "../components/ContactCard";

const Contact = () => {
    let cardContent = [
        {
            icon: "bi bi-envelope",
            title: "Email Us 24/7",
            desc: "Have any questions about your hotel stay?",
            desc2: "hotelsupport@gmail.com",
        },
        {
            icon: "bi bi-telephone",
            title: "Customer Support",
            desc: "Need help with a hotel booking?",
            desc2: "+1 (234) 456 8888",
        }
    ];

    return (
        <section className="pt-[100px] flex items-center flex-col h-screen">
            <div className="mb-5 sm:hidden relative contact-bg">
                <img src="/images/text-bg.png" width={'40%'} alt="" />
                <span className="font-semibold text-white absolute text-6xl contact-text top-[52%] tracking-wider left-[15%]">
                    CONTACT
                </span>
            </div>
            <div className="container mx-auto pt-10">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
                    <div className="md:w-4/12 w-full">
                        <div className="flex flex-col ">
                            <div className="contact-title">
                                <span className="text-3xl">Contact Us</span>
                                <h2 className="text-5xl my-4 font-semibold">
                                    Hotel Comfort Starts Here – Contact Us
                                </h2>
                            </div>
                            <div className="contact-card mt-16">
                                <div className="py-[40px] px-[30px] bg-[#EAF4E6] rounded-2xl">
                                    <div className="icon text-5xl mb-4 text-[#73B458]">
                                        <i className="bi bi-geo-fill"></i>
                                    </div>
                                    <div className="content">
                                        <span className="text-xl font-semibold text-[#11221C]">Location</span>
                                        <p className="text-[#737373] my-3">Want to visit our head office?</p>
                                        <h4 className="font-semibold text-[#11221C] text-[22px]">
                                            55 Clark St, Brooklyn, USA
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/12 w-full hidden md:flex justify-center">
                        <div className="flex justify-center">
                            <img src="/images/contact-img.jpg" className="rounded-full" alt="hotel contact" />
                        </div>
                    </div>
                    <div className="md:w-4/12 w-full">
                        <div className="contact-card flex flex-col gap-5">
                            {/* {
                                cardContent.map((card, idx) => (
                                    <ContactCard
                                        key={idx}
                                        icon={card.icon}
                                        title={card.title}
                                        desc={card.desc}
                                        desc2={card.desc2}
                                    />
                                ))
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
