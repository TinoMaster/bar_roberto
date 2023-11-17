import { links } from "../data/linksMenuPrincipal";
import { logo_transparent } from "../utils/images";
import { NavbarLink } from "./NabvarLink";
import { CgMenuHotdog } from "react-icons/cg";

interface NavBarPrincipalProps {
  toggleNavbar: () => void;
}
export const NavBarPrincipal = ({ toggleNavbar }: NavBarPrincipalProps) => {
  return (
    <div className="flex justify-center items-center absolute z-20 w-full p-2 text-slate-200">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo_transparent}
            alt=""
            className=" object-contain w-14 h-14 bg-white/50 rounded-full"
          />
          <h1 className="text-3xl">Bar Roberto</h1>
        </div>
        {/* btn open menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-4xl block p-1 border rounded-full text-slate-100"
          >
            <CgMenuHotdog />
          </button>
        </div>
        {/* Links */}
        <div className="gap-3 text-lg hidden lg:flex">
          {links?.map((link) => (
            <NavbarLink
              key={link.name}
              link={link}
              toggleNavbar={toggleNavbar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
