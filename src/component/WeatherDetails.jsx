function WeatherDetails({ speed, clouds, pressure }) {
  return (
    <div>
      <div className="flex flex-col justify-end ml-3 text-sm md:text-base D7BFF]">
        <p className="">Viento: {Math.ceil(speed * 3.6)} Km/h </p>
        <p>Nube: {clouds} </p>
        <p>Presion: {pressure} hPa</p>
      </div>
    </div>
  );
}
export default WeatherDetails;
