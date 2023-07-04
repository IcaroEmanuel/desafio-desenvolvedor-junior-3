import { Api } from "../api";

const RegisterService = {
  registerUser: async (name, email, password) => {
    try {
      const response = await Api.post("/register", { name, email, password });
      return response;
    } catch (error) {
      console.log("error", error);
    }
  },
};

export default RegisterService;
