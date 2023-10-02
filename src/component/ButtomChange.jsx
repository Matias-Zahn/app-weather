import { useEffect, useState } from "react";


function ButtomChange() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const BodyHTML = document.querySelector("body");

    if (theme === "dark") BodyHTML.classList.toggle("dark");
  }, [theme]);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <button onClick={handleTheme} className=" w-[50px] h-[50px] text-black  bg-white rounded-[70%] dark:bg-black ">
        <i className=' text-2xl  text-black dark:text-white   bx bxs-sun  '></i>
      </button>
    </div>
  );
}
export default ButtomChange;
