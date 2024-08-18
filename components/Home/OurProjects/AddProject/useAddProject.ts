"use client";
import { addProject, flexibleProjectType } from "@/redux/Project/projectThunks";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  customHandleChange,
  customHandleSubmit,
  customImagesChange,
} from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { handleError } from "@/utils/handleError";
import { verifyProjectValidationRules } from "@/utils/validationRules";
import { useRouter } from "next/navigation";
import { resetAddSuccess } from "@/redux/Project/projectSlice";

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
  const addSuccess = useAppSelector((state) => state.project.addSuccess);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [projectData, setProjectData] =
    useState<flexibleProjectType>(initialProjectState);

  useEffect(() => {
    if (addSuccess) {
      resetAddSuccess();
      window.location.reload();
    }
  }, [addSuccess]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    customHandleChange(e, setProjectData);
  };

  const handleTypeChange = (type: flexibleProjectType["type"]) => {
    setProjectData((prevData) => ({
      ...prevData,
      type,
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
