"use client";
import { removeProject } from "@/redux/Project/projectThunks";
import { useAppDispatch } from "@/redux/hooks";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import EditProject from "./EditProject/EditProject";

// import EditProject from ""

const ProjectBox = ({
  img,
  desc,
  type,
  index,
  id,
  isLogged,
}: {
  img: string;
  desc: string;
  type: "MDTR" | "GDEE";
  index: number;
  id: string;
  isLogged: boolean;
}) => {
  const dispatch = useAppDispatch();

  const [isLoading, executeCreateOrder] = useApiCallWithToast({
    apiCallFunction: () => dispatch(removeProject(id)),
    handleSuccess: () => {},
    messages: {
      loading: "Removing item...",
      success: "Item removed from basket!",
      error: "Could not remove item.",
    },
  });
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
      {isLogged && (
        <div className="absolute -top-3 right-0 flex flex-col gap-2 ">
          <button
            className=" h-6 w-6 flex items-center justify-center bg-red-600 rounded-full"
            type="button"
            disabled={isLoading}
            onClick={executeCreateOrder}
          >
            <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-white" />
          </button>
          <EditProject id={id} img={img} desc={desc} type={type} />
        </div>
      )}
    </div>
  );
};

export default ProjectBox;
