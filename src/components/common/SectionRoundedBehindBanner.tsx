interface SectionRoundedBehindBannerProps {
  children: React.ReactNode;
}

export const SectionRoundedBehindBanner = ({
  children,
}: SectionRoundedBehindBannerProps) => {
  return (
    <article className="py-10 rounded-tr-2xl relative -translate-y-8 bg-darkMode z-20">
      {children}
    </article>
  );
};
