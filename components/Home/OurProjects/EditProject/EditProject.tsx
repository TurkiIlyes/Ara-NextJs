"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CustomSelectImage from "@/components/Common/Custom/CustomSelectImage";
import useEditProject from "./useEditProject";
import CustomTextArea from "@/components/Common/Custom/CustomTextArea";
import CustomSelect from "@/components/Common/Custom/CustomSelect";
import CustomButtons from "@/components/Common/Custom/CustomButtons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const EditProject = ({
  id,
  img,
  desc,
  type,
}: {
  id: string;
  img: string;
  desc: string;
  type: "MDTR" | "GDEE";
}) => {
  const {
    projectData,
    typeData,
    handleChange,
    handleTypeChange,
    handleImageChange,

    handleSubmit,
    handleReset,
  } = useEditProject(id, img, desc, type);
  return (
    <Dialog>
      <DialogTrigger className=" h-6 w-6 flex items-center justify-center bg-grayscale-900 rounded-full">
        <FontAwesomeIcon icon={faPenToSquare} className="w-3 h-3 text-white" />
      </DialogTrigger>
      <DialogContent className=" flex flex-col items-center gap-6 w-full px-14 ">
        <DialogTitle className="text-center text-xl capitalize text-grayscale-900 font-medium ">
          Edit project
        </DialogTitle>
        <DialogDescription className=" w-9/12  flex flex-col gap-4 ">
          <CustomSelect<"MDTR" | "GDEE">
            label="Type"
            value={projectData.type}
            onChange={handleTypeChange}
            data={typeData}
          />

          <CustomTextArea
            value={projectData.name}
            onChange={handleChange}
            label="Project Name"
            placeholder="Enter Project name"
            name="name"
          />
          <CustomSelectImage
            label="Project Image"
            image={projectData.image || ""}
            handleImageChange={handleImageChange}
          />
          <CustomButtons
            mainButtonOnCLick={handleSubmit}
            secondaryButtonOnCLick={handleReset}
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default EditProject;
