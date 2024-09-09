import Image from "next/image";

const OurClientsSlide = ({ img }: { img: string }) => {
  return (
    <div className="relative rounded-md h-40 flex items-center justify-center">
      <Image
        src={img}
        width={800}
        height={800}
        alt="img"
        className=" w-40  rounded-md"
      />
    </div>
  );
};
// grayscale-[100%]
export default OurClientsSlide;
