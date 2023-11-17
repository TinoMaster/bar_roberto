import { HashRouter } from "react-router-dom";
import { Nabvar_Movil } from "../Nabvar_Movil";
import { NavBarPrincipal } from "../NavBarPrincipal";
import { useNavbar } from "../../hooks/useNavbar";
import { PagesRoutes } from "../routes/Pages.routes";

export const PrincipalLayout = () => {
  const { navbarOpen, toggleNavbar } = useNavbar();
  return (
    <HashRouter>
      <header>
        <Nabvar_Movil toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        <NavBarPrincipal toggleNavbar={toggleNavbar} />
      </header>
      <section>
        <PagesRoutes />
      </section>
      <footer></footer>
    </HashRouter>
  );
};
