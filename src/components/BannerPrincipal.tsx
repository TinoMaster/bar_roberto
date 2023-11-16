import { motion } from "framer-motion";
import { bannerBigTittle, bannerTittle } from "../utils/animations/framers";
import { img_banner_principale } from "../utils/images";

export const BannerPrincipal = () => {
  return (
    <section className="w-full h-[50vh] lg:h-[60vh] relative">
      <div className="absolute flex justify-center items-center w-full h-full bg-gradient-to-t from-black/40 to-black/50 z-10">
        <div className="flex flex-col text-white w-11/12 lg:w-1/3 h-5/6 justify-center items-center">
          <motion.p
            variants={bannerTittle}
            initial="initial"
            animate="animate"
            className="text-slate-300 text-xs md:text-xl italic"
          >
            Dolce Incanto di Pescara
          </motion.p>
          <motion.p
            variants={bannerBigTittle}
            initial="initial"
            animate="animate"
            className="text-3xl md:text-5xl text-center italic"
          >
            Dove la Tradizione si Fonde con l'Innovazione Culinaria
          </motion.p>
          <div className=" py-4">
            <motion.button
              variants={bannerTittle}
              initial="initial"
              animate="animate"
              className="bg-black/70 hover:bg-secondary/50 hover:shadow-black/60 transition-colors shadow-md shadow-black/40 text-lg p-2 rounded-md"
            >
              Ver Menu
            </motion.button>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black/40 to-black/50"></div>
      <img
        loading="lazy"
        className="w-full h-full object-cover"
        src={img_banner_principale}
        alt="prueba"
      />
    </section>
  );
};
