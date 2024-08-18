"use client";
import {
  addProject,
  editProject,
  flexibleProjectType,
} from "@/redux/Project/projectThunks";
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
import { urlToFile } from "@/utils/urlToFile";
import { resetEditSuccess } from "@/redux/Project/projectSlice";

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

const useEditProject = (
  id: string,
  img: string,
  desc: string,
  type: flexibleProjectType["type"]
) => {
  const editSuccess = useAppSelector((state) => state.project.editSuccess);
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [projectData, setProjectData] =
    useState<flexibleProjectType>(initialProjectState);

  useEffect(() => {
    setProjectData(() => ({
      name: desc,
      image: img,
      type: type,
    }));
  }, []);

  useEffect(() => {
    if (editSuccess) {
      resetEditSuccess();
      window.location.reload();
    }
  }, [editSuccess]);

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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const formImage = imageFile
      ? imageFile
      : await urlToFile(projectData.image as string, "image.png", "image/png");

    const dataToValidate: Record<string, string> = {
      name: projectData.name || "",
      type: projectData.type || "",
      image: formImage ? formImage.type : "",
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
      { image: formImage },
      {
        name: projectData.name,
        type: projectData.type,
      },
      (formData) => dispatch(editProject({ id: id, project: formData })),
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

export default useEditProject;
