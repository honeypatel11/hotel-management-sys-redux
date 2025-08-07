import { useEffect, useState } from "react";


const Hotelbayview = () => {
     const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 1;
    const end = 76;
    const duration = 2000; // 2 seconds
    const incrementTime = duration / end;

    const counter = setInterval(() => {
      if (start <= end) {
        setCount(start++);
      } else {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  return (
     <section className="bg-white py-96 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
       
        <div className="h-24">
          <img
            src="img/parallax-01.jpg"
            
            className="rounded shadow-md"
          />
          <div className="absolute-bottom-50 left-6 bg-teal-800 text-white p-6 rounded-sm shadow-lg w-32 text-center">
            <p className="text-2xl font-bold">+{count}</p>
            <p className="text-xs tracking-widest mt-1">BIG SUITES</p>
          </div>
        </div>


        <div className="py-15 m-30">
          <p className="uppercase text-sm text-gray-500 tracking-widest mb-2">
            Hotel Bayview
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Relax in our Hotel Resort
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600 text-sm leading-relaxed">
            <p>
              Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
              Proin tempor nunc vel nisl condimentum, nec tempor risus.
            </p>
            <p>
              Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque
              porttitor dui nec leo condimentum, et euismod mi mollis.
            </p>
            <p>
              Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
              Proin tempor nunc vel nisl condimentum, nec tempor risus.
            </p>
            <p>
              Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque
              porttitor dui nec leo condimentum, et euismod mi mollis.
            </p>
          </div>


          <div className="flex items-center gap-4 mt-6">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Manager"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold text-sm">Andrew Stuart</p>
              <p className="text-xs text-gray-500">Hotel Manager</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Signature_of_Roald_Amundsen.svg/512px-Signature_of_Roald_Amundsen.svg.png"
              alt="Signature"
              className="h-8 ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hotelbayview




