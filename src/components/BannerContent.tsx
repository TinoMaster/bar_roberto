import { motion } from "framer-motion";
import { bannerBigTittle, bannerTittle } from "../utils/animations/framers";

interface BannerContentProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const BannerContent = ({
  title,
  subtitle,
  children,
}: BannerContentProps) => {
  return (
    <div className="flex flex-col text-white w-11/12 lg:w-1/3 h-5/6 justify-center items-center">
      <motion.p
        variants={bannerTittle}
        initial="initial"
        animate="animate"
        className="text-slate-300 text-xs md:text-xl italic"
      >
        {title}
      </motion.p>
      <motion.p
        variants={bannerBigTittle}
        initial="initial"
        animate="animate"
        className="text-3xl md:text-5xl text-center italic"
      >
        {subtitle}
      </motion.p>
      <motion.div
        variants={bannerTittle}
        initial="initial"
        animate="animate"
        className="py-4"
      >
        {children}
      </motion.div>
    </div>
  );
};
