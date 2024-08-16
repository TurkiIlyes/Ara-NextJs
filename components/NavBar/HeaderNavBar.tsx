import Link from "next/link";
import SignOutButton from "./SignOutButton";

const links = [
  {
    title: "ARA COMPANY",
    link: "#ara", // Updated link to point to the 'Qui Sommes Nous' section
  },
  {
    title: "Activités",
    link: "#activites", // Update with the correct id if needed
  },
  {
    title: "Projets",
    link: "#projets", // Update with the correct id if needed
  },
  {
    title: "Clients",
    link: "#clients", // Update with the correct id if needed
  },
  {
    title: "Chiffres",
    link: "#chiffre", // Update with the correct id if needed
  },
  {
    title: "Contact Us",
    link: "#contact", // Update with the correct id if needed
  },
];

const HeaderNavBar = ({
  session,
}: {
  session?: { user?: { id?: string } } | null;
}) => {
  return (
    <div className=" flex-1 hidden md:flex justify-end">
      {links.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.link}
            className="group h-full pl-14 text-base font-medium "
          >
            {item.title}
            <hr className=" group-hover:w-full transition-all duration-500  w-0 h-0.5 bg-white " />
          </Link>
        );
      })}
      {session?.user?.id && (
        <SignOutButton className=" h-full pl-14 text-base font-medium " />
      )}
    </div>
  );
};

export default HeaderNavBar;
