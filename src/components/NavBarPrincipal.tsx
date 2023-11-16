import { links } from "../data/linksMenuPrincipal";
import { logo_transparent } from "../utils/images";
import { NavbarLink } from "./NabvarLink";
import { CgMenuHotdog } from "react-icons/cg";

interface NavBarPrincipalProps {
  toggleNavbar: () => void;
}
export const NavBarPrincipal = ({ toggleNavbar }: NavBarPrincipalProps) => {
  return (
    <div className="flex justify-center items-center absolute z-20 w-full p-2">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center w-24">
          <img
            src={logo_transparent}
            alt=""
            className="w-full h-full object-contain"
          />
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
