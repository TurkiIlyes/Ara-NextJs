import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const quickLinksData = [
  { title: "Privacy Policy", url: "" },
  { title: "Terms Of Use", url: "" },
  { title: "FAQ", url: "" },
  { title: "Contact", url: "" },
];

const QuickLinks = () => {
  return (
    <div className=" max-sm:w-1/2 px-4 h-full flex max-sm:justify-between gap-12 ">
      <div className=" flex flex-col items-center gap-8 ">
        <h2 className=" text-xl font-normal text-grayscale-200">Quick Link</h2>
        <ul className="">
          {quickLinksData.map((e, i) => {
            return (
              <li className=" group mb-8 " key={i}>
                <Link href={e.url} className="flex items-center ">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className=" w-4 h-4 text-[#3b5998] group-hover:rotate-45 transition-all duration-300"
                  />
                  <span className=" ml-4 text-xs font-normal text-opacity-90 text-grayscale-200 group-hover:text-[#1da1f2] transition-all duration-300">
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
