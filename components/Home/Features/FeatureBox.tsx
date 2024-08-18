import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface props {
  title: string;
  description: string;
  icon: IconProp;
}
const FeatureBox = ({ title, description, icon }: props) => {
  return (
    <div className=" relative flex flex-col items-center gap-4 py-4 ">
      <div className=" relative flex justify-center items-center">
        <Image
          src="/Imgs/Features/Feature.png"
          alt=""
          width={140}
          height={140}
        />
        <FontAwesomeIcon
          icon={icon}
          className=" absolute w-16 h-16 text-white"
        />
      </div>

      <h2 className="text-xl sm:text-lg md:text-xl font-semibold text-grayscale-900">
        {title}
      </h2>
      <p className=" text-justify text-sm sm:text-xs md:text-sm font-normal text-grayscale-900">
        {description}
      </p>
    </div>
  );
};

export default FeatureBox;
