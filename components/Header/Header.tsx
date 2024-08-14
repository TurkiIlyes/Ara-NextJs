"use client";
import Link from "next/link";
import HeaderNavBar from "../NavBar/HeaderNavBar";
import { useEffect, useState } from "react";
import HeaderMobileNavBar from "../NavBar/HeaderMobileNavBar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  let prevScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 0) {
        setIsSticky(true);
      } else if (currentScrollY < prevScrollY) {
        setIsSticky(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-500 ${
        isSticky ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      } ${isSticky ? "fixed top-0 left-0" : "absolute top-0 left-0"}`}
    >
      <div className="container h-28 flex items-center py-4 px-6">
        <Link href="/" className=" text-xl font-semibold ">
          Ara consulting
        </Link>
        <HeaderNavBar />
        <HeaderMobileNavBar />
      </div>
    </header>
  );
};

export default Header;
