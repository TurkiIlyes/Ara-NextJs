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

const HeaderNavBar = () => {
  return (
    <div className=" flex-1 hidden sm:flex justify-end">
      {links.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.link}
            className=" py-6 pl-16 text-base font-medium "
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderNavBar;
