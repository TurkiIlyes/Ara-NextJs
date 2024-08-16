const AuthSlide = ({
  slideData,
}: {
  slideData: { img: string; title: string; desc: string };
}) => {
  return (
    <div
      className=" w-full min-h-[105vh] bg-cover bg-center relative "
      style={{
        backgroundImage: `url(${slideData.img})`,
      }}
    >
      <div className=" w-full h-full absolute top-[45%] z-10 flex flex-col items-center gap-8">
        <span className=" text-base sm:text-xl font-normal text-white capitalize ">
          {slideData.title}
        </span>
        <div className=" h-[2px] w-[150px] bg-custom-gradient"></div>
        <p className="  max-w-[750px] px-4 py-4 text-center text-xl sm:text-2xl md:text-5xl leading-normal md:leading-normal font-semibold text-white capitalize ">
          {slideData.desc}
        </p>
      </div>
    </div>
  );
};

export default AuthSlide;
