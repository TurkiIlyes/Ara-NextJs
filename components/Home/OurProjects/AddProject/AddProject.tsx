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
import useAddProject from "./useAddProject";
import CustomTextArea from "@/components/Common/Custom/CustomTextArea";
import CustomSelect from "@/components/Common/Custom/CustomSelect";
import CustomButtons from "@/components/Common/Custom/CustomButtons";
const AddProject = () => {
  const {
    projectData,
    typeData,
    handleChange,
    handleTypeChange,
    handleImageChange,

    handleSubmit,
    handleReset,
  } = useAddProject();
  return (
    <Dialog>
      <DialogTrigger className=" w-full h-full  flex justify-center items-center bg-grayscale-600 z-10 rounded-full">
        <FontAwesomeIcon icon={faPlus} className=" w-4 h-4 text-white " />
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[800px] flex flex-col gap-6 px-4 rounded-sm ">
        <DialogTitle className="text-center text-2xl tracking-wider capitalize text-grayscale-900 text-opacity-70 font-medium ">
          add new project
        </DialogTitle>
        <DialogDescription className="flex flex-col gap-6 ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className=" flex flex-col  gap-8 ">
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
            </div>
            <div className="">
              <CustomSelectImage
                label="Project Image"
                image={projectData.image || ""}
                handleImageChange={handleImageChange}
              />
            </div>
          </div>
          <CustomButtons
            title="Create"
            mainButtonOnCLick={handleSubmit}
            secondaryButtonOnCLick={handleReset}
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
