export const credentialsSignInValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  password: {
    required: true,
  },
};
