import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const quickLinksData = [
  { title: "Activites", url: "#activites" },
  { title: "Projets", url: "#projets" },
  { title: "Clients", url: "#clients" },
  { title: "Contact", url: "#contact" },
];

const QuickLinks = () => {
  return (
    <div className=" max-sm:w-1/2 px-4 h-full flex max-sm:justify-between gap-12 ">
      <div className=" flex flex-col gap-8 ">
        <h2 className=" text-xl font-normal text-grayscale-200">Lien Rapide</h2>
        <ul className="">
          {quickLinksData.map((e, i) => {
            return (
              <li className=" group mb-6 " key={i}>
                <Link href={e.url} className="flex items-center ">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className=" w-4 h-4 text-primary group-hover:rotate-45 transition-all duration-300"
                  />
                  <span className=" ml-4 text-xs font-normal text-opacity-90 text-grayscale-200 group-hover:text-primary transition-all duration-300">
                    {e.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
