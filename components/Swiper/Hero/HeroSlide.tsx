const AuthSlide = ({
  slideData,
}: {
  slideData: { img: string; title: string; desc: string };
}) => {
  return (
    <div
      className=" w-full min-h-[105vh] bg-cover bg-center relative overflow-hidden "
      style={{
        backgroundImage: `url(${slideData.img})`,
      }}
    >
      <div className=" w-full h-full absolute top-[45%] z-10 flex flex-col items-center gap-6">
        <span className=" text-base sm:text-xl font-medium text-white capitalize ">
          {slideData.title}
        </span>
        <div className=" h-[2px] w-[150px] bg-custom-gradient"></div>
        <p className=" max-w-[880px] px-4 py-4 text-center text-xl sm:text-2xl md:text-[40px] leading-loose tracking-wide md:leading-relaxed font-semibold text-white capitalize ">
          {slideData.desc}
        </p>
      </div>
    </div>
  );
};

export default AuthSlide;
