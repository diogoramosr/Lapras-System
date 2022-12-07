import React, { useState } from "react";
import { RiSearch2Line, RiMapPinLine } from "react-icons/ri";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  /*
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  */
  return (
    <div className="flex flex-row justify-center my-6">
      
      
      <div className="flex sm:w-full md:w-full lg:w-3/4 items-center justify-center space-x-4 bg-red-500">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Pesquisar..."
          className="text-xl font-light p-2 sm:w-full w-full shadow-xl focus:outline-none placeholder:lowercase"  
        />
        <RiSearch2Line
          size={25}
          className=" cursor-pointer transition ease-out hover:scale-125 "
          onClick={handleSearchClick}
        />
        <RiMapPinLine
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row md:w-full lg:w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          ºC
        </button>
        <p className="text-xl mx-1">|</p>
        <button
          name="imperial"
          className="text-xl font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          ºF
        </button>
      </div>
    </div>
  );
}
export default Inputs;
