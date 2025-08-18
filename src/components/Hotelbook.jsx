// import { useNavigate } from "react-router-dom"

// const Hotelbook = ({ id, img, title, desc, country, price, place, person, days, season }) => {
//     const navigate = useNavigate()

//     return (
//         <div className="px-[15px] py-[15px] w-3/12">
//             <div className=" bg-white rounded-2xl  shadow p-4">
//                 <div className="relative">
//                     <img src={img} alt="Diamond Beach"
//                         className="rounded-xl w-full h-52 object-cover" />
//                     <span className="absolute bottom-2 right-2 bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow">
//                         {days} days
//                     </span>
//                 </div>
//                 <div className="mt-4 flex items-center gap-1">
//                     <div className="text-yellow-400 text-lg">★★★★★</div>
//                     <span className="text-sm text-gray-600 ml-1">4.8(3k reviews)</span>
//                 </div>
//                 <h3 className="text-lg font-semibold mt-1">{title}</h3>
//                 <div className="flex items-center justify-between text-gray-500 text-sm mt-1">
//                     <div>
//                         <i className="bi bi-geo-alt"></i>
//                         <span>{country}</span>
//                     </div>
//                     <span>{season}</span>
//                 </div>
//                 <p className="text-gray-500 text-sm mt-2">{desc}</p>
//                 <div className="grid grid-cols-3 border rounded-xl mt-4 text-sm overflow-hidden">
//                     <div className="flex flex-col items-center justify-center py-3">
//                         <span className="flex items-center gap-1 text-orange-500">
//                             <i className="bi bi-cash-stack"></i> Price
//                         </span>
//                         <span className="font-semibold text-lg text-gray-900">${price}</span>
//                     </div>
//                     <div className="flex flex-col items-center justify-center border-x py-3">
//                         <span className="flex items-center gap-1 text-orange-500">
//                             <i className="bi bi-geo"></i> Place
//                         </span>
//                         <span className="font-semibold text-lg text-gray-900">{place}</span>
//                     </div>
//                     <div className="flex flex-col items-center justify-center py-3">
//                         <span className="flex items-center gap-1 text-orange-500">
//                             <i className="bi bi-people"></i> Guest
//                         </span>
//                         <span className="font-semibold text-lg text-gray-900">{person}</span>
//                     </div>
//                 </div>
//                 <button onClick={() => navigate(`/trips/${id}`)} className="mt-4 w-full bg-green-100 text-green-700 font-medium py-3 rounded-full flex items-center justify-center gap-2 hover:bg-green-200 transition">
//                     Book Now <i className="bi bi-arrow-right"></i>
//                 </button>
//             </div>
//         </div>

//     )
// }

// export default Hotelbook