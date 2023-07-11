import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { Api } from "../api";

const user = getUserLocalStorage();
const headers = { Authorization: `Bearer ${user.token}` };

const PostsService = {
  getPosts: async () => {
    try {
      const post = await Api.get("/posts", { headers });
      return post.data;
    } catch (error) {
      console.log("error", error);
    }
  },

  getPostById: async (id) => {
    try {
      const post = await Api.get(`/posts/${id}`, { headers });
      return post.data;
    } catch (error) {
      console.log("error", error);
    }
  },

  createPost: async (userId, title, content) => {
    const body = {
      userId,
      title,
      content,
    };
    try {
      const post = await Api.post("/posts", body, { headers });
      return post.data;
    } catch (error) {
      console.log("error", error);
    }
  },

  editPost: async (id, title, content)  => {
    const body = {
      title,
      content,
    };

    try {
      await Api.put(`/posts/${id}`, body, { headers });
    } catch (error) {
      console.log("error", error);
    }
  },

  deletePost: async (id) => {
    try {
      await Api.delete(`posts/${id}`, {headers})
    } catch (error) {
      console.log(error);
    }
  }
};

export default PostsService;
