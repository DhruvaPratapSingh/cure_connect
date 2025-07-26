import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl font-bold tracking-wide text-blue-900 drop-shadow-sm">
        Find by Speciality
      </h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-700">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto px-4">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.speciality}`}
            key={index}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer 
                       hover:-translate-y-2 transition-all duration-500"
          >
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-2xl p-3 
                         bg-white/30 backdrop-blur-md border border-white/40 
                         shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center hover:bg-blue-100"
            >
              <img
                className="w-12 sm:w-16 h-12 sm:h-16 object-contain drop-shadow-md "
                src={item.image}
                alt={item.speciality}
              />
            </div>
            <p className="text-sm font-medium text-gray-800  group-hover:text-blue-700">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
