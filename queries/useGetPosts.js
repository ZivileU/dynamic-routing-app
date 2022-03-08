import axios from "axios";
import { useQuery } from "react-query";

const useGetPosts = () => {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      "https://boards-api.greenhouse.io/v1/boards/unity3d/jobs"
    );
    return data;
  });
};

export default useGetPosts;
