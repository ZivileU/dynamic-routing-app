import axios from "axios";
import { useQuery } from "react-query";

const getPostById = async (id) => {
  const { data } = await axios.get(
    `https://boards-api.greenhouse.io/v1/boards/unity3d/jobs/${id}`
  );
  return data;
};

const useGetPost = (id) => {
  return useQuery(`post-${id}`, () => getPostById(id), {
    enabled: !!id,
  });
};

export default useGetPost;
