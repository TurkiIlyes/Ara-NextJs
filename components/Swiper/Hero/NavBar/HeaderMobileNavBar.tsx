"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
];

const HeaderMobileNavBar = () => {
  return (
    <div className=" sm:hidden">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faList} className=" w-5 h-5" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] px-4 pt-14">
          <div className=" flex flex-col w-full h-full text-grayscale-900 pb-28  overflow-y-scroll scroll">
            {links.map((item, i) => {
              return (
                <Link key={i} href={item.link}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderMobileNavBar;
