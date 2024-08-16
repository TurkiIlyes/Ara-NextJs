"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

const links = [
  {
    title: "ARA COMPANY",
    link: "/",
  },
  {
    title: "Activités",
    link: "/about",
  },
  {
    title: "Projets",
    link: "/contact",
  },
  {
    title: "Clients",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/portfolio",
  },
];

const HeaderMobileNavBar = ({
  session,
}: {
  session?: { user?: { id?: string } } | null;
}) => {
  console.log("HeaderMobileNavBar");
  console.log(session);
  return (
    <div className=" flex-1 flex md:hidden justify-end ">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faBars} className=" w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="w-[240px] px-4 pt-14">
          <div className=" flex flex-col w-full h-full text-grayscale-900 ">
            {links.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.link}
                  className=" flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-grayscale-900  hover:bg-grayscale-300 rounded-lg "
                >
                  {item.title}
                </Link>
              );
            })}
            {session?.user?.id && (
              <div className=" px-6 py-2">
                <SignOutButton />
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderMobileNavBar;
