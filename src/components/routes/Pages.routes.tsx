import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoadingSkeletonPages } from "../../utils/loaders/LoadingSkeletonPages";

const HomePage = lazy(() => import("../../pages/Home"));
const MenuPage = lazy(() => import("../../pages/Menu"));
const ServicesPage = lazy(() => import("../../pages/Services"));
const StoryPage = lazy(() => import("../../pages/Story"));
const ContactPage = lazy(() => import("../../pages/Contact"));

export const PagesRoutes = () => {
  return (
    <>
      <Suspense fallback={<LoadingSkeletonPages />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/history" element={<StoryPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
