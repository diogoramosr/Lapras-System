import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "São Paulo",
    },
    {
      id: 2,
      title: "Rio de Janeiro",
    },
    {
      id: 3,
      title: "Belo Horizonte",
    },
    {
      id: 4,
      title: "Brasília",
    },
    {
      id: 5,
      title: "Amazônia",
    },
    {
      id: 6,
      title: "Recife",
    },
  ];
  return (
    <div className="items-center justify-between flex ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
