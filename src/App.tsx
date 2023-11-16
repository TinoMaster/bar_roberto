import { HashRouter } from "react-router-dom";
import { BannerPrincipal } from "./components/BannerPrincipal";
import { NavBarPrincipal } from "./components/NavBarPrincipal";
import { useNavbar } from "./hooks/useNavbar";
import { Nabvar_Movil } from "./components/Nabvar_Movil";

function App() {
  const { navbarOpen, toggleNavbar } = useNavbar();
  return (
    <main className="text-red-500 font-siliguri">
      <HashRouter>
        <Nabvar_Movil toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        <NavBarPrincipal toggleNavbar={toggleNavbar} />
        <BannerPrincipal />
      </HashRouter>
    </main>
  );
}

export default App;
