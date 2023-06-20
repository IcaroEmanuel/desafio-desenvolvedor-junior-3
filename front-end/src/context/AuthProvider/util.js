import { Api } from "../../services/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const userJson = localStorage.getItem("u");

  if (!userJson) {
    return null;
  }

  const user = JSON.parse(userJson);

  return user;
}

export async function Login(email, password) {
  try {
    const request = await Api.post("/auth/login", { email, password });

    return request.data;
  } catch (error) {
    return null;
  }
}
