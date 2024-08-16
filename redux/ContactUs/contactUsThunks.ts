import axios from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "@/utils/handleError";
import toast from "react-hot-toast";

export interface ContactUsType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export type flexibleContactUsType = Partial<ContactUsType>;

export const addContactUs = createAsyncThunk(
  "contactUs/addContactUs",
  async (contactUs: flexibleContactUsType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contactUs`,
        contactUs
      );
      toast.success("email sent successfully !");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
);
