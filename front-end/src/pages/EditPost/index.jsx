import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostsService from "../../services/PostsApi/postApi";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [succes, setSucces] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  function cancelPost() {
    navigate("/posts");
  }

  async function editPost(e) {
    e.preventDefault();
      await PostsService.editPost(id, title, content);
      setSucces(true);
  }

  useEffect(() => {
    const getPost = async () => {
      const post = await PostsService.getPostById(id);

      setTitle(post.title);
      setContent(post.content);
    };

    getPost();
  }, [id]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {succes && (
        <div className="bg-slate-100 text-slate-900 w-2/6 p-2">
          <div class="flex">
            <span class="material-symbols-outlined text-green-900">done</span>
            <strong class="me-auto">Post editado!</strong>
            <button
              type="button"
              onClick={() => setSucces(false)}
            >
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div class="toast-body">Atualize a página para ver as mudanças.</div>
        </div>
      )}

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
              onClick={editPost}
              className="rounded-md bg-indigo-600 p-3 mr-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Confirmar
            </button>
            <button
              type="button"
              onClick={cancelPost}
              className="rounded-md bg-red-600 p-3 mr-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
