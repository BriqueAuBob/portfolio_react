import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useLocation } from "react-router";

export default function Navbar() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  scrollY.on("change", (y) => {
    setIsScrolled(y > 170);
  });

  return (
    <motion.nav className={"navbar" + (isScrolled ? " scroll" : "")}>
      brandon.
      <ul>
        <li>
          <a className={location.pathname === "/" ? "active" : ""} href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/#about_me">About</a>
        </li>
        <li>
          <a href="/#portfolio">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
}
