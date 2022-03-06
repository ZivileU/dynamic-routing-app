import axios from "axios";
import { useQuery } from "react-query";

export const useGetPost = ({ id }) => {
  return useQuery("post", async () => {
    const { data } = await axios.get(
      `https://boards-api.greenhouse.io/v1/boards/unity3d/jobs/${id}`
    );
    return data;
  });
};
