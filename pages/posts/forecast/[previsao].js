import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";
import TopButtons from "../../../components/previsao/TopButtons";
import Inputs from "../../../components/previsao/Inputs";
import TimeAndLocation from "../../../components/previsao/TimeAndLocation";
import TemperaturaDetalhes from "../../../components/previsao/TemperaturaDetalhes";
import Forecast from "../../../components/previsao/Forecast";
import getFormattedWeatherData from "../../../services/weatherService";

export default function Previsão({ data }) {
  const [query, setQuery] = useState({ q:  "Campinas"   }); 
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      await getFormattedWeatherData({ ...query, units }).then((data) => {

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 dark:bg-gray-600 h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] dark:bg-gray-600">
          <NavbarDash title="Previsão" />
          <div class="2xl:container h-full bg-zinc-50 dark:bg-gray-600 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-600">
              <div class="flex justify-center items-center">
                <div className="p-1 w-full">
                  <div
                    className="mx-auto w-full h-full mt-4 py-5 px-32 bg-gradient-to-br "
                  >
                    <TopButtons setQuery={setQuery} />
                    <Inputs
                      setQuery={setQuery}
                      units={units}
                      setUnits={setUnits}
                    />

                    {weather && (
                      <div>
                        <TimeAndLocation weather={weather} />
                        <TemperaturaDetalhes weather={weather} />
                        <Forecast
                          title="hourly forecast"
                          items={weather.hourly}
                        />
                        <Forecast title="daily forecast" items={weather.daily} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
