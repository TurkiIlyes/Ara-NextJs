"use client";
import Link from "next/link";
import HeaderNavBar from "../NavBar/HeaderNavBar";
import { useEffect, useState } from "react";
import HeaderMobileNavBar from "../NavBar/HeaderMobileNavBar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      } ${isSticky ? "fixed top-0 left-0" : "absolute top-0 left-0"}`}
    >
      <div className="container flex items-center py-4 px-6">
        <Link href="/" className=" text-xl font-semibold ">
          Ara consolting
        </Link>
        <HeaderNavBar />
        <HeaderMobileNavBar />
      </div>
    </header>
  );
};

export default Header;
