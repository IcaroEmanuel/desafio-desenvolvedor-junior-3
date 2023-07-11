import { Api } from "../api";

const UserService = {
  registerUser: async (name, email, password) => {
    try {
      const response = await Api.post("/register", { name, email, password });
      return response;
    } catch (error) {
      console.log("error", error);
    }
  },

  getUsers: async () => {
    try {
      const users = await Api.get("/users");
      return users;
    } catch (error) {
      console.log("error", error);
    }
  },
};

export default UserService;
