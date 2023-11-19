interface BannerPageProps {
  children: React.ReactNode;
  movilImage: string;
  desktopImage: string;
}

export const BannerPage = ({
  children,
  movilImage,
  desktopImage,
}: BannerPageProps) => {
  return (
    <section className="w-full h-[60vh] lg:h-[70vh] relative">
      <article className="absolute flex justify-center items-center w-full h-full bg-gradient-to-t from-black/40 to-black/50 z-10">
        {children}
      </article>
      <div className="absolute w-full h-full bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={movilImage}
          alt="prueba"
        />
      </picture>
    </section>
  );
};
