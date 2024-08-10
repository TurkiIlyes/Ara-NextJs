import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatBox = ({
  icon,
  title,
  subTitle,
}: {
  icon: IconProp;
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className=" w-full h-[180px] sm:w-1/2 md:w-1/4 flex flex-col items-center px-8 py-6  bg-primary z-10 max-sm:rounded-lg ">
      <div className=" h-1/2 flex items-center ">
        <FontAwesomeIcon
          icon={icon}
          className=" flex justify-center items-center w-6 h-6 text-white p-2  bg-primary border-4 border-grayscale-500 rounded-full"
        />
      </div>

      <span className=" h-1/2 flex flex-col justify-center gap-2 text-center text-base font-semibold text-white  ">
        {title}
        {subTitle && <span className="">{subTitle}</span>}
      </span>
    </div>
  );
};

export default StatBox;
