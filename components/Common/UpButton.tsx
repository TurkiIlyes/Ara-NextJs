"use client";

const UpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`flex ${
        window.scrollY > 100 ? "opacity-100" : "opacity-0"
      } justify-center flex-wrap max-sm:gap-6 fixed right-8 bottom-6 z-10 h-[50px] w-[50px]`}
    >
      <img src="/Imgs/fleche.png" alt="" />
    </button>
  );
};

export default UpButton;
