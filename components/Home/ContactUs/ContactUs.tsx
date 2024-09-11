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
          label="Prénom"
          placeholder="Entrez votre prénom"
          name="firstName"
        />
        <CustomInput
          value={contactUsData.lastName}
          onChange={handleChange}
          label="Nom"
          placeholder="Entrez votre nom"
          name="lastName"
        />
      </div>
      <CustomInput
        value={contactUsData.email}
        onChange={handleChange}
        label="Email"
        placeholder="Entrez votre email"
        name="email"
      />
      <CustomTextArea
        value={contactUsData.message}
        onChange={handleChange}
        label="Message"
        placeholder="Entrez votre message"
        name="message"
      />
      <CustomButtons
        title="Envoyer"
        mainButtonOnCLick={handleSubmit}
        secondaryButtonOnCLick={handleReset}
      />
    </div>
  );
};

export default ContactUs;
