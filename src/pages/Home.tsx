import { AboutUs } from "../components/AboutUs";
import { BannerContent } from "../components/BannerContent";
import { BannerPage } from "../components/BannerPage";
import { Wy_US } from "../components/Wy_Us";
import { SectionRoundedBehindBanner } from "../components/common/SectionRoundedBehindBanner";
import { bannerContent } from "../data/BannerContent";
import { useSEO } from "../hooks/UseSEO";
import {
  img_banner_principale_movil,
  img_banner_principale_desktop,
} from "../utils/images";

const HomePage = () => {
  useSEO({
    title: "Bar Roberto | Casa",
  });
  return (
    <article className="px-2">
      <BannerPage
        movilImage={img_banner_principale_movil}
        desktopImage={img_banner_principale_desktop}
      >
        <BannerContent
          subtitle={bannerContent.home.subtitle}
          title={bannerContent.home.title}
        />
      </BannerPage>
      <SectionRoundedBehindBanner>
        <Wy_US />
      </SectionRoundedBehindBanner>
      <section className="py-10">
        <AboutUs />
      </section>
    </article>
  );
};

export default HomePage;
