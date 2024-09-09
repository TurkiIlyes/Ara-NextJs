import { handleError } from "@/utils/handleError";
import { validateFormFields } from "@/utils/validateFormFields";
import { credentialsSignInValidationRules } from "@/utils/validationRules";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const errorParam = params.get("error") as string | undefined;
    if (errorParam) {
      toast.error(decodeURIComponent(errorParam));
    }

    const successParam = params.get("success") as string | undefined;
    if (successParam) {
      toast.success(decodeURIComponent(successParam));
      router.push("/");
    }
  }, [params]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const dataToValidate: Record<string, string> = {
      email: email,
      password: password,
    };

    const newErrors = validateFormFields(
      dataToValidate,
      credentialsSignInValidationRules
    );

    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }

    signIn("credentials", {
      redirect: true,
      callbackUrl: "/auth/login?success=Logged%20in%20successfully",
      email,
      password,
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};

export default useLogin;
