import { BannerContent } from "../components/BannerContent";
import { BannerPage } from "../components/BannerPage";
import { bannerContent } from "../data/BannerContent";
import {
  img_banner_principale_movil,
  img_banner_principale_desktop,
} from "../utils/images";

const HomePage = () => {
  return (
    <article>
      <BannerPage
        movilImage={img_banner_principale_movil}
        desktopImage={img_banner_principale_desktop}
      >
        <BannerContent
          subtitle={bannerContent.home.subtitle}
          title={bannerContent.home.title}
        />
      </BannerPage>
    </article>
  );
};

export default HomePage;