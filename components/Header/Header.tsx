"use client";
import Link from "next/link";
import HeaderNavBar from "../NavBar/HeaderNavBar";
import { useEffect, useState } from "react";
import HeaderMobileNavBar from "../NavBar/HeaderMobileNavBar";
import Image from "next/image";

const links = [
  {
    title: "ARA COMPANY",
    link: "#about",
  },
  {
    title: "Activités",
    link: "#activites",
  },
  {
    title: "Projets",
    link: "#projets",
  },
  {
    title: "Clients",
    link: "#clients",
  },
  {
    title: "Chiffres",
    link: "#chiffres",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Header = ({
  session,
}: {
  session?: { user?: { id?: string } } | null;
}) => {
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
      {/* px-6 */}
      <div className="container h-[104px] flex items-center py-4 px-6 ">
        <Link href="/" className=" text-xl font-semibold ">
          {/* Ara consulting */}
          <Image
            src={`/Imgs/logo/${isSticky ? "dark-logo.png" : "light-logo.png"}`}
            width={800}
            height={800}
            alt="logo"
            className=" w-56 aspect-[4/1.5]"
          />
        </Link>
        <HeaderNavBar session={session} links={links} isSticky={isSticky} />
        <HeaderMobileNavBar session={session} links={links} />
      </div>
    </header>
  );
};

export default Header;
