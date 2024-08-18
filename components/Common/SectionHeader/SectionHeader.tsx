import AddProject from "@/components/Home/OurProjects/AddProject/AddProject";

const SectionHeader = ({
  title,
  isLogged,
}: {
  title: string;
  isLogged?: boolean;
}) => {
  return (
    <div className=" group mx-auto w-fit flex flex-col items-center gap-5 ">
      <span className=" text-center text-4xl leading-normal font-normal text-grayscale-600 ">
        {title}
      </span>
      <div className=" w-full flex justify-center items-center">
        <hr className=" group-hover:w-full transition-all duration-500  w-4/6 h-1 bg-grayscale-600 " />
        <div className=" absolute w-6 h-6 bg-white border-[3px] border-grayscale-600 rounded-full">
          {isLogged && title === "Nos Projets" && <AddProject />}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
