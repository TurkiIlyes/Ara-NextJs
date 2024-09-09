import Link from "next/link";
import SignOutButton from "./SignOutButton";

const HeaderNavBar = ({
  session,
  links,
  isSticky,
}: {
  session?: { user?: { id?: string } } | null;
  links: { title: string; link: string }[];
  isSticky: boolean;
}) => {
  return (
    <div className=" flex-1 hidden md:flex justify-end">
      {links.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.link}
            className="group h-full pl-12 text-sm font-medium "
          >
            {item.title}
            <hr
              className={`group-hover:w-full transition-all duration-500  w-0 h-0.5 ${
                isSticky ? "bg-black" : "bg-white"
              } `}
            />
          </Link>
        );
      })}
      {session?.user?.id && (
        <SignOutButton className=" h-full pl-14 text-sm font-medium " />
      )}
    </div>
  );
};

export default HeaderNavBar;
