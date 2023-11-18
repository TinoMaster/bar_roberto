import { useState } from "react";

export const useNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return { navbarOpen, toggleNavbar };
};
