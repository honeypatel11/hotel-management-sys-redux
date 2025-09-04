import React from 'react';

const Contact = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <div className="h-[300px] bg-cover bg-center flex items-center justify-center text-black text-4xl font-bold" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}>
        Contact
      </div>

      {/* Info Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 py-12">
        {/* Card 1 */}
        <div className="border p-6 w-full md:w-[300px] text-center shadow">
          <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" alt="clock" className="mx-auto w-10" />
          <h3 className="text-xl font-semibold mt-4 mb-2">Reception Always Open</h3>
          <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar.</p>
          <a href="#" className="text-black underline">Read More</a>
        </div>

        {/* Card 2 */}
        <div className="border p-6 w-full md:w-[300px] text-center shadow">
          <img src="https://img.icons8.com/ios-filled/50/000000/laptop.png" alt="reservation" className="mx-auto w-10" />
          <h3 className="text-xl font-semibold mt-4 mb-2">Online Reservations</h3>
          <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar.</p>
          <a href="#" className="text-black underline">Read More</a>
        </div>
      </div>

      {/* Contact Form */}
      <section className="text-center px-4">
        <h6 className="uppercase text-sm tracking-widest text-gray-500">Contact Us</h6>
        <h1 className="text-4xl font-bold mt-2">Get In Touch</h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan.
          Maecenas quis nunc sed sapien dignissim pulvinar. Se d at gravida.
        </p>
        <button className="mt-6 bg-green-900 text-white px-6 py-2">View Prices</button>

        <form className="max-w-2xl mx-auto mt-10 flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border px-4 py-3" />
          <input type="email" placeholder="Email" className="border px-4 py-3" />
          <textarea placeholder="Message" rows="5" className="border px-4 py-3"></textarea>
          <button type="submit" className="bg-black text-white py-3">Send</button>
        </form>
      </section>

      {/* Map + Hotel Info */}
      <div className="relative mt-16">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402905421986!2d144.95565131550493!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778ebcddf8a50!2sEnvato!5e0!3m2!1sen!2sau!4v1614640043291!5m2!1sen!2sau"
          className="w-full h-[450px] border-0"
          loading="lazy"
        ></iframe>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white p-6 w-[320px] text-left">
          <h3 className="text-xl font-semibold mb-3">Hotel Info</h3>
          <p className="mb-1">📍 111 8th Ave, New York U.S.A.</p>
          <p className="mb-1">📞 +1-202-555-0153</p>
          <p className="mb-3">✉️ info@hotel.com</p>
          <button className="bg-white text-black w-full py-2">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
