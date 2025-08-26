import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { logoutAdmin } from "../features/students/hotelSlice"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.hotels.isLoggedIn);

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/login");
    toast.success("Admin Logged Out Successfully!");
  };


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  if (isLoggedIn) {
    navLinks.splice(1, 0, 
      { name: "Hotels", path: "/hotels" },
      { name: "Add Hotel", path: "/add-hotel" }
    );
  }


  const isActive = (path) =>
    pathname === path || (pathname.includes(path) && path !== "/");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        pathname !== "/" ? "bg-[#2f473e] shadow-lg" : "bg-transparent md:mt-[40px]"
      }`}
    >
      <nav className="container mx-auto">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

          <Link to="/" className="flex items-center space-x-3">
       
            <img
              src="/img/hotel-logocolor.png"
              alt="Hotel Logo"
              className="max-w-[120px] max-[354px]:w-24 h-auto"
              loading="lazy"
            />
          </Link>

   
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="font-semibold flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-1 py-1 transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-[#73B458]"
                        : "text-white hover:text-[#F29727]"
                    }`}
                  >
                    {link.name}
               
                    {isActive(link.path) && (
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#73B458] rounded" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 bg-[#73B458] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-colors duration-300"
                aria-label="Logout"
              >
                Logout <i className="bi bi-arrow-right-circle-fill text-xl" />
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 bg-[#73B458] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-colors duration-300"
                aria-label="Login"
              >
                Login <i className="bi bi-arrow-right-circle-fill text-xl" />
              </button>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-3xl p-1 focus:outline-none focus:ring-2 focus:ring-[#73B458] rounded"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

     
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#11221c] z-50 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/img/hotel-logocolor.png"
                alt="Hotel Logo"
                className="max-w-[0px]"
                loading="lazy"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl p-1 focus:outline-none focus:ring-2 focus:ring-[#73B458] rounded"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col space-y-6 font-semibold text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-[#73B458]"
                      : "hover:text-[#F29727]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="w-full flex justify-center items-center gap-2 bg-[#73B458] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-colors duration-300"
                aria-label="Logout"
              >
                Logout <i className="bi bi-arrow-right-circle-fill text-xl" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/login");
                }}
                className="w-full flex justify-center items-center gap-2 bg-[#73B458] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-colors duration-300"
                aria-label="Login"
              >
                Login <i className="bi bi-arrow-right-circle-fill text-xl" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
