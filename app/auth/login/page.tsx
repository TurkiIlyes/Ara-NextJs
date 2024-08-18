import { Suspense } from "react";
import Login from "@/components/Auth/Login";

const page = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};

export default page;
