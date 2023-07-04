import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { Api } from "../api";

const PostsService = {
  getPosts: async () => {
    try {
      const token = getUserLocalStorage();
      const headers = { Authorization: `Bearer ${token.token}` };
      const response = await Api.get("/posts", { headers });
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};

export default PostsService;
