export const credentialsSignInValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  password: {
    required: true,
  },
};

export const verifyProjectValidationRules = {
  name: { required: true },
  type: {
    required: true,
    customValidator: (value: string) =>
      !["MDTR", "GDEE"].includes(value)
        ? "Please select a valid project type (MDTR or GDEE)."
        : null,
  },
  image: {
    customValidator: (value: string) =>
      !["image/jpeg", "image/png", "image/gif"].includes(value)
        ? "Please select a valid image file (JPEG, PNG, or GIF)."
        : null,
  },
};

export const verifyContactUsValidationRules = {
  firstName: { required: true },
  lastName: { required: true },
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  message: { required: true },
};
