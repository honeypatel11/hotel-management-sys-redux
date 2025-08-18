// import React from 'react'
// import { useDispatch } from 'react-redux'

// const Hoteltable = ({trips}) => {
//     const dispatch = useDispatch()

//     const handleDelete = (id) => {
//         dispatch(deleteBookings(id))
//     }
//   return (

//         <div>
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                 <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//                         <tr>
//                             <th scope="col" className="px-6 py-3">
//                                 Destination
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Days
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Total Person
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Best Season
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Price
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Action
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             trips.map((trip, idx) => {
//                                 return <tr key={trip.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
//                                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//                                         {trip.country}
//                                     </th>
//                                     <td className="px-6 py-4">
//                                         {trip.days}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {trip.person}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {trip.season}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         {trip.price}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         <div className="flex items-center gap-4">
//                                             <Link to={`/edit-trips/${trip.id}`} className="font-medium text-green-600 hover:underline">Edit</Link>
//                                             <button onClick={() => handleDelete(trip.id)} className="font-medium text-red-600 hover:underline">Delete</button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//   )
// }

// export default Hoteltable