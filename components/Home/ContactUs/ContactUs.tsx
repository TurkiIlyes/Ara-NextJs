"use client";

import CustomInput from "@/components/Common/Custom/CustomInput";
import CustomTextArea from "@/components/Common/Custom/CustomTextArea";
import useContactUs from "./useContactUs";
import CustomButtons from "@/components/Common/Custom/CustomButtons";

const ContactUs = () => {
  const {
    contactUsData,
    handleChange,

    handleSubmit,
    handleReset,
  } = useContactUs();

  return (
    <div className=" w-full flex flex-col gap-5">
      <div className=" flex gap-4">
        <CustomInput
          value={contactUsData.firstName}
          onChange={handleChange}
          label="First Name"
          placeholder="Enter First Name"
          name="firstName"
        />
        <CustomInput
          value={contactUsData.lastName}
          onChange={handleChange}
          label="Last Name"
          placeholder="Enter Last Name"
          name="lastName"
        />
      </div>
      <CustomInput
        value={contactUsData.email}
        onChange={handleChange}
        label="Email"
        placeholder="Enter Email"
        name="email"
      />
      <CustomTextArea
        value={contactUsData.message}
        onChange={handleChange}
        label="message"
        placeholder="Enter message"
        name="message"
      />
      <CustomButtons
        title="Submit"
        mainButtonOnCLick={handleSubmit}
        secondaryButtonOnCLick={handleReset}
      />
    </div>
  );
};

export default ContactUs;
