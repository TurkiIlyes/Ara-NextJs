import Image from "next/image";

const OurClientsSlide = ({ img }: { img: string }) => {
  return (
    <div className="relative rounded-md ">
      <Image
        src={img}
        width={800}
        height={800}
        alt="img"
        className=" w-40 aspect-[4/2] rounded-md grayscale-[100%] h-[50px]"
      />
    </div>
  );
};

export default OurClientsSlide;
