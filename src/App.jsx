import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Weather from "./component/Weather";
import Loader from "./component/Loader";
import ButtomChange from "./component/ButtomChange";

function App() {
  const [weather, setWeather] = useState(null);

  const [city, setCity] = useState("");

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const MyAPIKey = "24e5ec8a0f341ee7ff01aa47ee3f2064";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MyAPIKey}`
      )
      .then(({ data }) => setWeather(data))
      .catch((error) => console.log(error));
  };

  const recepValue = (e) => {
    e.preventDefault();
    const value = city;
    const cityName = value.toLowerCase();
    const MyAPIKey = "24e5ec8a0f341ee7ff01aa47ee3f2064";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${MyAPIKey}`
      )
      .then(({ data }) => setWeather(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#026EED] via-[#56A5F1] to-[#FFFFFF] dark:from-[#53388F] dark:to-[#2F2958] text-white min-h-screen p-4">
      {weather === null ? (
        <Loader />
      ) : (
        <section>
          <div className="flex justify-between gap-4 flex-wrap max-w-[1024px] m-auto">
            <h1>Weather app</h1>

            <ButtomChange />
          </div>

          <div className="flex  items-center justify-center bg-[#52B5E8] dark:bg-[#201F3C]  rounded-xl max-w-[600px] m-auto mt-4">
            <img className="p-4" src="/icons/search.svg" alt="" />
            <form onSubmit={recepValue} className="w-[60%]">
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none outline-none"
                type="text"
                placeholder="Buscar una ciudad"
                autoFocus
              />
            </form>
            <button onClick={recepValue}>Search</button>
          </div>

          <article className=" font-['Lato'] flex justify-center items-center  min-h-screen">
            <Weather weather={weather} />
          </article>
        </section>
      )}
    </main>
  );
}

export default App;
