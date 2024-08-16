"use client";
import { addProject, flexibleProjectType } from "@/redux/Project/projectThunks";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  customHandleChange,
  customHandleSubmit,
  customImagesChange,
} from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { handleError } from "@/utils/handleError";
import { verifyProjectValidationRules } from "@/utils/validationRules";

const typeData = [
  {
    value: "MDTR",
    label: "MDTR",
  },
  {
    value: "GDEE",
    label: "GDEE",
  },
];

const initialProjectState: flexibleProjectType = {
  name: "",
  image: "",
  type: "MDTR",
};

const useAddProject = () => {
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [projectData, setProjectData] =
    useState<flexibleProjectType>(initialProjectState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    customHandleChange(e, setProjectData);
  };

  const handleTypeChange = (status: flexibleProjectType["type"]) => {
    setProjectData((prevData) => ({
      ...prevData,
      status,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customImagesChange<flexibleProjectType>(
      e,
      setProjectData,
      "image",
      setImageFile
    );
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataToValidate: Record<string, string> = {
      name: projectData.name || "",
      type: projectData.type || "",
      image: imageFile ? imageFile.type : "",
    };
    const newErrors = validateFormFields(
      dataToValidate,
      verifyProjectValidationRules
    );
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }
    customHandleSubmit(
      e,
      { image: imageFile },
      {
        name: projectData.name,
        type: projectData.type,
      },
      (formData) => dispatch(addProject(formData)),
      handleReset
    );
  };
  const handleReset = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    setImageFile(null);
    setProjectData(initialProjectState);
  };
  return {
    projectData,
    typeData,
    handleChange,
    handleTypeChange,
    handleImageChange,

    handleSubmit,
    handleReset,
  };
};

export default useAddProject;
