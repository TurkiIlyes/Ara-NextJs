const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className=" mx-auto w-fit flex flex-col items-center gap-5 ">
      <span className=" text-center text-4xl leading-normal font-normal text-grayscale-600 ">
        {title}
      </span>
      <div className=" w-48 flex justify-center items-center">
        <hr className=" w-full h-1 bg-grayscale-600 " />
        <div className=" absolute w-6 h-6 bg-white border-[3px] border-grayscale-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
