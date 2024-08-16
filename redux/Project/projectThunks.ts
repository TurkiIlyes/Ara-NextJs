import axios from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "@/utils/handleError";
import toast from "react-hot-toast";

export interface ProjectType {
  _id: string;
  name: string;
  image: string;
  type: "MDTR" | "GDEE";
}

export type flexibleProjectType = Partial<ProjectType>;

export const addProject = createAsyncThunk(
  "project/addProject",
  async (project: FormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/project`,
        project
      );
      toast.success("project added !");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const editProject = createAsyncThunk(
  "project/editProject",
  async ({ id, project }: { id: string; project: FormData }) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/project/${id}`,
        project
      );
      toast.success("Project information updated successfully!");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const removeProject = createAsyncThunk(
  "project/removeProject",
  async (productId: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/project/${productId}`
      );
      toast.success("project removed !");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
);
