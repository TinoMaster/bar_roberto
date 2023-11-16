"use client";
import { NavbarLink } from "./NabvarLink";
import { AiOutlineClose } from "react-icons/ai";
import { links } from "../data/linksMenuPrincipal";

interface Nabvar_MovilProps {
  toggleNavbar: () => void;
  navbarOpen: boolean;
}
export const Nabvar_Movil = ({
  toggleNavbar,
  navbarOpen,
}: Nabvar_MovilProps) => {
  return (
    <div
      className={`fixed transition-transform ${
        navbarOpen
          ? "flex flex-col translate-x-0 w-screen bg-gradient-to-tr from-orange-50 via-white to-orange-50 h-screen z-50"
          : "-translate-x-full"
      } `}
    >
      <button
        onClick={toggleNavbar}
        className="p-10 flex justify-end text-3xl text-slate-600"
      >
        <AiOutlineClose />
      </button>
      <div className="flex flex-col grow justify-center items-center h-full gap-5">
        {links?.map((link) => (
          <NavbarLink key={link.name} link={link} toggleNavbar={toggleNavbar} />
        ))}
      </div>
    </div>
  );
};
