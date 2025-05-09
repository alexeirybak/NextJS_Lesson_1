"use client";

import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";
// import { useState } from "react";

export const Navbar = () => {
//   const [search, setSearch] = useState("");
  console.log("Навигационный блок");
  return (
    <nav>
      <NavLinks />
      <NavSearch />
    </nav>
  );
};
