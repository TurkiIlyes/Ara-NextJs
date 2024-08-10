import Image from "next/image";

const ProjectBox = ({
  img,
  desc,
  index,
}: {
  img: string;
  desc: string;
  index: number;
}) => {
  return (
    <div
      className={` relative w-full sm:w-3/4 px-8 py-8 border-[1px] border-grayscale-500 rounded-3xl ${
        index % 2 === 0 ? "mr-auto" : "ml-auto"
      }`}
    >
      <Image
        src={img}
        alt="project"
        width={800}
        height={800}
        className={`absolute -top-8 ${
          index % 2 === 0 ? "left-8" : "right-8"
        } w-40 aspect-[6/2]`}
      />
      <p className=" text-lg leading-loose font-medium text-grayscale-800 ">
        {desc}
      </p>
    </div>
  );
};

export default ProjectBox;
