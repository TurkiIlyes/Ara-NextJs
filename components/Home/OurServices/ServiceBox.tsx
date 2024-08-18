import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceBox = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: IconProp;
  description: string;
}) => {
  return (
    <div className=" relative">
      <FontAwesomeIcon
        icon={icon}
        className=" absolute -left-8 -top-10 w-9 h-9 text-white p-2.5 my-4  bg-primary border-8 border-grayscale-500 rounded-full"
      />
      <div className=" h-[240px] px-6 py-8 flex flex-col items-center gap-4 border-[1px] border-grayscale-500 rounded-lg ">
        <span className=" text-lg font-bold text-primary ">{title}</span>
        <p className=" text-justify text-sm leading-loose font-medium text-grayscale-700 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
