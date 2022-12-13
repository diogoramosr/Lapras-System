import Head from "next/head";
import React, { useState, useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import NavbarDash from "../../components/NavbarDash";
import TopButtons from "../../components/previsao/TopButtons";
import Inputs from "../../components/previsao/Inputs";
import TimeAndLocation from "../../components/previsao/TimeAndLocation";
import TemperaturaDetalhes from "../../components/previsao/TemperaturaDetalhes";
import Forecast from "../../components/previsao/Forecast";
import getFormattedWeatherData from "../../services/weatherService";

export default function Previsão({ data }) {
  const [query, setQuery] = useState({ q: "Campinas" });
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Previsão</title>
        <link
          rel="apple-touch-icon"
          tamanhos="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          tamanhos="32x32 "
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          tamanhos="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c " />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <NavbarDash title="Previsão" />
      <div class="m-0 font-sans antialiased font-normal text-base leading-default dark:bg-gray-600 h-full bg-zinc-100 fadeIn">
      <div class="ml-auto w-full dark:bg-gray-600 h-full max-w-[1300px] mx-auto p-2">
          <div class="2xl:container h-full dark:bg-gray-600 fadeIn">
            <div class="2xl:container h-full dark:bg-gray-600">
              <div class="flex justify-center items-center">
                <div className="p-1 w-full">
                  <div className="mx-auto w-full h-full mt-4 py-5 px-32 bg-gradient-to-br">
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
                          title="Previsão horária                          "
                          items={weather.hourly}
                        />
                        <Forecast
                          title="Previsão diária"
                          items={weather.daily}
                        />
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
