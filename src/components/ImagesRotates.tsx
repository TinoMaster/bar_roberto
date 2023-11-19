import { motion } from "framer-motion";
import { LazyImage } from "./common/LazyImage";

interface ImagesRotatesProps {
  image1: string;
  image2: string;
}
const image1historyHome = {
  initial: {
    opacity: 0,
    rotate: -10,
    x: 8,
    y: 12,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
const image2historyHome = {
  initial: {
    opacity: 0,
    rotate: 12,
    x: -8,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const ImagesRotates = ({ image1, image2 }: ImagesRotatesProps) => {
  return (
    <article className="lg:w-1/2 flex gap-3">
      {/* block1 */}
      <motion.div
        variants={image1historyHome}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.8 }}
        className="w-1/2 flex flex-col gap-2 justify-center items-end"
      >
        <div className="w-[120px] h-[150px] lg:w-[250px] lg:h-[300px] p-1 bg-gradient-to-tr from-primary to-black shadow-lg shadow-black/40 rounded-md first:p-2 saturate-50">
          <LazyImage src={image1} alt="1" />
        </div>
      </motion.div>
      {/* block2 */}
      <motion.div
        variants={image2historyHome}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1.8 }}
        className="w-1/2 flex flex-col gap-2 justify-center items-start "
      >
        <div className="w-[120px] h-[150px] lg:w-[250px] lg:h-[300px] p-1 bg-gradient-to-tr from-black to-primary shadow-lg shadow-black/40 rounded-md first:p-2 saturate-50">
          <LazyImage src={image2} alt="1" />
        </div>
      </motion.div>
    </article>
  );
};
