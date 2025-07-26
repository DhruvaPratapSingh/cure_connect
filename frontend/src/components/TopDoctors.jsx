import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const {doctors} = useContext(AppContext)
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 to-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium '>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item,index)=>(
            <div
  onClick={() => {
    navigate(`/appointment/${item._id}`);
    scrollTo(0, 0);
  }}
  key={index}
  className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 
  bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-blue-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border border-blue-200"
>
  <div className="w-full h-48 overflow-hidden">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  <div className="p-4">
    <div
      className={`flex items-center gap-2 text-sm mb-2 font-medium ${
        item.available ? "text-green-600" : "text-red-600"
      }`}
    >
      <span
        className={`w-3 h-3 rounded-full ${
          item.available ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      <p>{item.available ? "Available" : "Not Available"}</p>
    </div>

    <p className="text-gray-900 text-lg font-semibold group-hover:text-blue-700 transition-colors">
      {item.name}
    </p>

    <p className="text-gray-700 text-sm mt-1">{item.speciality}</p>
  </div>
</div>

        ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}}  className="
    px-12 py-3 mt-10 rounded-full font-medium
    bg-gradient-to-r from-blue-400 to-blue-600
    text-white shadow-md
    hover:shadow-xl hover:scale-105
    transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600">more</button>
    </div>
  )
}

export default TopDoctors
