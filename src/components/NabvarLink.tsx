import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { TypeLinkMenu } from "../types/typeLinkMenu";

interface NavbarLinkProps {
  link: TypeLinkMenu;
  toggleNavbar: () => void;
  navbarOpen: boolean;
}
export const NavbarLink = ({
  link,
  toggleNavbar,
  navbarOpen,
}: NavbarLinkProps) => {
  const { name, href, hash } = link;
  const { pathname } = useLocation();
  const currentHash = pathname.slice(1);

  const navBarIsAlreadyClose = () => {
    if (navbarOpen) {
      toggleNavbar();
    }
  };

  return (
    <Link
      to={`${href}`}
      onClick={navBarIsAlreadyClose}
      className={`${
        currentHash === hash ? "" : ""
      } relative text-3xl lg:text-xl inline-block`}
    >
      {currentHash === hash ? (
        <motion.div
          layoutId="active"
          className="absolute w-full h-full border-b-2"
        ></motion.div>
      ) : null}
      <span className="text-slate-800 lg:text-white">{name}</span>
    </Link>
  );
};
