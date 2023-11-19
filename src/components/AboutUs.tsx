import { ImagesRotates } from "./ImagesRotates";
import { img_aboutUs1, img_aboutUs2 } from "../utils/images";
import { LinkButton } from "./LinkButton";

export const AboutUs = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-10 lg:gap-0">
      <ImagesRotates image1={img_aboutUs1} image2={img_aboutUs2} />
      <div className="flex flex-col w-full lg:w-1/2 italic gap-2 items-center lg:items-start justify-center">
        <h3 className="text-primary text-3xl text-center w-full">
          ~~ La Nostra Storia ~~
        </h3>
        <p className="text-slate-200 text-xl text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          aliquam odio consequuntur temporibus suscipit, ratione beatae,
          cupiditate, placeat explicabo est blanditiis maiores. Illo modi fuga
          at odio vero laborum alias? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Inventore aliquam odio consequuntur temporibus
          suscipit, ratione beatae, cupiditate, placeat explicabo est blanditiis
          maiores. Illo modi fuga at odio vero laborum alias?
        </p>
        <div className="w-full flex justify-center py-5">
          <LinkButton title="Scopri di piu" href="/history" />
        </div>
      </div>
    </div>
  );
};
