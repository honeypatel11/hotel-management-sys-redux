import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../features/students/hotelSlice";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.hotels.isLoggedIn);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(input));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/hotels");
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className="font-poppins">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#11221C] via-[#1b2d25] to-[#24362f] p-6">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full bg-white rounded-2xl shadow-2xl max-w-md p-10">
            <h1 className="text-4xl text-teal-700 mb-6 text-center font-extrabold tracking-wide">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Login to manage your hotels
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
        
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={input.email}
                  id="email"
                  placeholder="manager@hotel.com"
                  className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

        
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  value={input.password}
                  id="password"
                  placeholder="********"
                  className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

   
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                Log In
              </button>
            </form>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
