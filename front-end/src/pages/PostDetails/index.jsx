import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostsService from "../../services/PostsApi/postApi";

export default function PostDetails() {
  const [post, setPost] = useState({
    User: {
      name: "",
    },
    title: "",
    content: "",
  });
  const { id } = useParams();
  const navigate = useNavigate()

  const backToPostsPage = () => {
    navigate('/posts');
  }

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await PostsService.getPostById(id);
        setPost(response);
      } catch (error) {
        console.log("error", error);
      }
    };

    getPost();
  }, [id]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="flex justify-end fixed top-0 right-0">
        <button
          type="button"
          onClick={backToPostsPage}
          className="rounded bg-blue-600 hover:bg-blue-500 p-3 mr-4 mt-2 text-gray-200"
        >
          Voltar
        </button>
      </div>
      <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            Autor: {post.User.name}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <p className="mt-5 text-lg text-gray-700">{post.content}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
