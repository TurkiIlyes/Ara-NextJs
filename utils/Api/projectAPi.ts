import { ProjectType } from "@/redux/Project/projectThunks";
import axios from "@/utils/axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProject = async () => {
  const response = await axios.get(`${apiBaseUrl}/project`);
  return response.data.data as ProjectType[];
};
