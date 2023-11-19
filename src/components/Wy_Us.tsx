import { RiMapPinTimeLine } from "react-icons/ri";
import { GiStaryu } from "react-icons/gi";

export const Wy_US = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl italic bg-gradient-to-r from-primary/50 via-orange-300 to-primary/50 bg-clip-text text-transparent">
        Scopri La Nostra Essenza
      </h2>
      <p className="text-primary text-3xl">★★★★★</p>
      <div className="flex w-full justify-around gap-2 py-3">
        {/* Experience */}
        <div className="flex flex-col lg:flex-row w-1/2 items-center border-r border-primary gap-3 lg:gap-0">
          <div className="text-5xl shadow-md flex justify-center items-center rounded-full">
            <RiMapPinTimeLine className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full bg-gradient-to-l from-darkMode to-primary text-white" />
          </div>
          <div className="text-center">
            <h3 className="italic font-bold text-primary lg:text-xl">Experience</h3>
            <p className="bg-gradient-to-r from-primary italic to-white bg-clip-text text-transparent lg:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dignissimos praesentium atque, fugit sint voluptatem!
              Impedit{" "}
            </p>
          </div>
        </div>
        {/* Qualita */}
        <div className="flex flex-col-reverse lg:flex-row w-1/2 items-center border-l border-primary gap-3 lg:gap-0">
          <div className="text-center">
            <h3 className="italic font-bold text-primary lg:text-xl">Qualita</h3>
            <p className="bg-gradient-to-l from-primary italic to-white bg-clip-text text-transparent lg:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dignissimos praesentium atque, fugit sint voluptatem!
              Impedit{" "}
            </p>
          </div>
          <div className="text-5xl shadow-md flex justify-center items-center rounded-full">
            <GiStaryu className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full bg-gradient-to-l from-primary to-darkMode text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
