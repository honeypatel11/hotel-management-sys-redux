import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../features/students/hotelSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  const isLoggedIn = useSelector((state) => state.hotels.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/login");
    toast.success("Admin Logged Out Successfully!");
  };

  return (
    <>
      <header>
        <nav className="bg-white w-full z-20 top-0 start-0 fixed shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
           
            <Link to="/" className="flex items-center space-x-3">
              <img src="/img/hotel-logocolor.png" alt="" className="w-56" />
            </Link>

        
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 items-center">
                <li>
                  <Link
                    to="/"
                    className={`${
                      pathname === "/"
                        ? "text-[#558870] px-2 font-bold text-md"
                        : "text-black px-2 text-md hover:text-[#558870] hover:font-semibold transition-all duration-200"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                {isLoggedIn && (
                  <li>
                    <Link
                      to="/hotels"
                      className={`${
                        pathname === "/hotels" || pathname === "/add-hotel"
                          ? "text-[#558870] px-2 font-bold text-md"
                          : "text-black px-2 text-md hover:text-[#558870] hover:font-semibold transition-all duration-200"
                      }`}
                    >
                      Hotels
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to="/contact"
                    className={`${
                      pathname === "/contact"
                        ? "text-[#558870] px-2 font-bold text-md"
                        : "text-black px-2 text-md hover:text-[#558870] hover:font-semibold transition-all duration-200"
                    }`}
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/rooms"
                    onClick={() => setMenu(false)}
                    className={`${
                      pathname === "/rooms"
                        ? "text-[#558870] font-bold"
                        : "text-black hover:text-[#558870] hover:font-semibold transition-all duration-200"
                    }`}
                  >
                    Rooms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  type="button"
                  className="px-5 py-2 bg-[#558870] text-white rounded-lg font-medium shadow-md hover:bg-[#446d58] hover:scale-105 transition-all duration-200"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  type="button"
                  className="px-5 py-2 bg-[#558870] text-white rounded-lg font-medium shadow-md hover:bg-[#446d58] hover:scale-105 transition-all duration-200"
                >
                  Login
                </button>
              )}

              <div className="md:hidden">
                <button
                  onClick={() => setMenu(!menu)}
                  className="text-black text-2xl mt-2"
                >
                  {menu ? "✕" : "☰"}
                </button>
              </div>
            </div>
          </div>
        </nav>

    
        {menu && (
          <div
            className={`md:hidden fixed inset-0 text-[#558870] bg-white z-50 p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
              menu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMenu(false)}
                className="flex items-center space-x-3"
              >
                <img src="/img/hotel-logocolor.png" alt="Logo" className="w-40" />
              </Link>

              <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenu(false);
                    }}
                    className="px-4 py-2 bg-[#558870] text-white rounded-lg font-medium shadow-md hover:bg-[#446d58] hover:scale-105 transition-all duration-200"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setMenu(false);
                      navigate("/login");
                    }}
                    className="px-4 py-2 bg-[#558870] text-white rounded-lg font-medium shadow-md hover:bg-[#446d58] hover:scale-105 transition-all duration-200"
                  >
                    Login
                  </button>
                )}

                <button
                  onClick={() => setMenu(false)}
                  className="text-3xl text-black focus:outline-none"
                >
                  ✕
                </button>
              </div>
            </div>

       
            <ul className="flex flex-col mt-12 space-y-6 font-medium text-black text-lg">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenu(false)}
                  className={`${
                    pathname === "/"
                      ? "text-[#558870] font-bold"
                      : "text-black hover:text-[#558870] hover:font-semibold transition-all duration-200"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/hotels"
                  onClick={() => setMenu(false)}
                  className={`${
                    pathname === "/hotels"
                      ? "text-[#558870] font-bold"
                      : "text-black hover:text-[#558870] hover:font-semibold transition-all duration-200"
                  }`}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/add-hotel"
                  onClick={() => setMenu(false)}
                  className={`${
                    pathname === "/add-hotel"
                      ? "text-[#558870] font-bold"
                      : "text-black hover:text-[#558870] hover:font-semibold transition-all duration-200"
                  }`}
                >
                  Add Hotel
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenu(false)}
                  className={`${
                    pathname === "/contact"
                      ? "text-[#558870] font-bold"
                      : "text-black hover:text-[#558870] hover:font-semibold transition-all duration-200"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  onClick={() => setMenu(false)}
                  className={`${
                    pathname === "/rooms"
                      ? "text-[#558870] font-bold"
                      : "text-black hover:text-[#558870] hover:font-semibold transition-all duration-200"
                  }`}
                >
                  Rooms
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
