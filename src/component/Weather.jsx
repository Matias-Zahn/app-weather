import { useState } from "react";
import icons from "../icons.js";
import WeatherDetails from "./WeatherDetails.jsx";

function Weather({ weather }) {
  const [celcius, setCelcius] = useState(true);

  const changeUnit = (temp) => {
    if (celcius) {
      const changeToCelcius = (temp - 273.15).toFixed(1);

      return `${changeToCelcius} º`;
    } else {
      const changeToFarenheint = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
      return `${changeToFarenheint} º`;
    }
  };

  const handleChangeUnit = () => {
    setCelcius(!celcius);
  };

  return (
    <article className="flex flex-col justify-center flex-shrink-0 h-[50vh]">
      <section className='bg-[url("/bg-color-light.svg")] dark:bg-[url("/bg-color-weather.svg")] bg-contain bg-no-repeat bg-center p-4 grid text-[#026EED] dark:text-white '>
        <section className="flex items-center p-2">
          <div className="flex flex-col justify-end mr-3">
            <h2 className="text-7xl md:text-7xl font-light mb-4">
              {changeUnit(weather.main.temp)}
            </h2>

            <WeatherDetails
              speed={weather.wind.speed}
              clouds={weather.clouds.all}
              pressure={weather.main.pressure}
            />
          </div>
          <picture className="  ">
            <img src={icons[weather.weather[0].icon]} alt="" />
          </picture>
        </section>

        <section className="flex justify-between font-semibold items-center pb-4 pr-4 pl-4">
          <h4 className="text-lg ">
            {weather.name}, {weather.sys.country}
          </h4>
          <h5 className="text-xs uppercase mr-2">
            {weather.weather[0].description}
          </h5>
        </section>
      </section>

      <button
        onClick={handleChangeUnit}
        className="m-auto mt-4 p-4 bg-[#38A0D8] hover:bg-[#3686ff] dark:bg-[#7D69F1] rounded-2xl w-40 dark:hover:bg-violet-950 transition-colors"
      >
        Cambiar a {celcius ? "ºF" : "ºC"}
      </button>
    </article>
  );
}
export default Weather;
