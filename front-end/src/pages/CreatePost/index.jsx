import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserApi/userApi";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import PostsService from "../../services/PostsApi/postApi";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await UserService.getUsers();

        const userLs = getUserLocalStorage();

        const loggedUser = users.data.filter(
          (user) => user.email === userLs.email
        );
        setUser(loggedUser);
      } catch (error) {
        console.log("error", error);
      }
    };

    getUsers();
  }, []);

  const navigate = useNavigate();

  function cancelPost() {
    navigate("/posts");
  }

  async function createPost(e) {
    e.preventDefault();
    await PostsService.createPost(user[0].id, title, content);

    navigate("/posts");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Escreva seu post nos campos abaixo
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Título
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="title"
                autoComplete="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Conteúdo
            </label>
          </div>
          <div className="mt-2">
            <textarea
              id="content"
              name="content"
              rows="5"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={createPost}
              className="rounded-md bg-indigo-600 p-3 mr-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Publicar
            </button>
            <button
              type="button"
              onClick={cancelPost}
              className="rounded-md bg-red-600 p-3 mr-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
