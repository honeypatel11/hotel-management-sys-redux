import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginAdmin } from "../features/students/hotelSlice"

const Login = () => {
    const [input, setInput] = useState({ email: "", password: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
   const isLoggedIn = useSelector((state) => state.hotels.isLoggedIn)


    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAdmin(input))
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/hotels") 
        }
    }, [isLoggedIn, navigate])

    return (
        <section className="home-section login-section">
            <div className="min-h-screen flex items-center justify-center bg-[#11221C]">
                <div className="w-full lg:w-1/2 flex items-center justify-center md:p-8">
                    <div className="w-full bg-white md:rounded-md shadow-md max-w-md p-8">
                        <h1 className="text-3xl text-teal-800 mb-6 text-center font-bold">Login</h1>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-900">Email</label>
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    value={input.email}
                                    id="email"
                                    placeholder="manager@hotel.com"
                                    className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-900">Password</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    value={input.password}
                                    id="password"
                                    placeholder="********"
                                    className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#11221C] hover:bg-[#4f6048] text-white text-sm font-semibold py-3 rounded-sm transition-all duration-300"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
