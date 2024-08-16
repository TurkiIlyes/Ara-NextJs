"use client";
import {
  addContactUs,
  flexibleContactUsType,
} from "@/redux/ContactUs/contactUsThunks";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { customHandleChange, customHandleSubmit } from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { handleError } from "@/utils/handleError";
import { verifyContactUsValidationRules } from "@/utils/validationRules";

const initialContactUsState: flexibleContactUsType = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const useContactUs = () => {
  const dispatch = useAppDispatch();

  const [contactUsData, setContactUsData] = useState<flexibleContactUsType>(
    initialContactUsState
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    customHandleChange(e, setContactUsData);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataToValidate: Record<string, string> = {
      firstName: contactUsData.firstName || "",
      lastName: contactUsData.lastName || "",
      email: contactUsData.email || "",
      message: contactUsData.message || "",
    };
    const newErrors = validateFormFields(
      dataToValidate,
      verifyContactUsValidationRules
    );
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }
    customHandleSubmit(
      e,
      {},
      {
        firstName: contactUsData.firstName,
        lastName: contactUsData.lastName,
        email: contactUsData.email,
        message: contactUsData.message,
      },
      (formData) => dispatch(addContactUs(contactUsData)),
      handleReset
    );
  };
  const handleReset = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

    setContactUsData(initialContactUsState);
  };
  return {
    contactUsData,
    handleChange,

    handleSubmit,
    handleReset,
  };
};

export default useContactUs;
