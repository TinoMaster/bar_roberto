import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { TypeLinkMenu } from "../types/typeLinkMenu";

interface NavbarLinkProps {
  link: TypeLinkMenu;
  toggleNavbar: () => void;
}
export const NavbarLink = ({ link, toggleNavbar }: NavbarLinkProps) => {
  const { name, href, hash } = link;
  const { pathname } = useLocation();
  const currentHash = pathname.slice(1);

  return (
    <Link
      to={`${href}`}
      onClick={toggleNavbar}
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
