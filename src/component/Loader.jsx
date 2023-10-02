function Loader() {
  return (
    <div className="w-[100%] h-[100vh] grid place-items-center ">
      <div className="grid place-items-center gap-5">
        <img src="/icons-loaders/Cloud-loader.svg" alt="" />
        <img src="/icons-loaders/title-loader.svg" alt="" />
        <div className="relative flex">
          <img
            className=""
            src="/icons-loaders/rectangule-loader.svg"
            alt=""
          />
          <div>
            <img
              className="absolute left-0 bottom-[2px] ml-4"
              src="/icons-loaders/icons-loaders.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loader;
