import { HashRouter } from "react-router-dom";
import { Nabvar_Movil } from "../Nabvar_Movil";
import { NavBarPrincipal } from "../NavBarPrincipal";
import { useNavbar } from "../../hooks/useNavbar";
import { PagesRoutes } from "../routes/Pages.routes";
import Footer from "../Footer";

export const PrincipalLayout = () => {
  const { navbarOpen, toggleNavbar } = useNavbar();
  return (
    <HashRouter>
      <header className="">
        <Nabvar_Movil toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        <NavBarPrincipal toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
      </header>
      <section className="bg-darkMode">
        <div className="gradient"></div>
        <PagesRoutes />
      </section>
      <footer className="bg-darkMode">
        <Footer />
      </footer>
    </HashRouter>
  );
};
