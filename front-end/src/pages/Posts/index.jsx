import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostsService from "../../services/PostsApi/postApi";
import { getUserLocalStorage } from "../../context/AuthProvider/util";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  const [myPosts, setMyPosts] = useState(false);
  const [user, setUser] = useState({
    email: "",
    token: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUserLocalStorage());
    const allPosts = async () => {
      try {
        const postsData = await PostsService.getPosts();

        setAllPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    return allPosts;
  }, []);

  const filterPostsByuser = () => {
    setMyPosts(!myPosts);
  };

  const createPost = () => {
    navigate("/create-post");
  };

  const deletePost = async (id) => {
    await PostsService.deletePost(id);
  };

  const navigateEditPost = (id) => {
    navigate(`/edit-post/${id}`);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Publicações
          </h2>
          <div className="flex flex-col sm:flex-row justify-start my-4">
            <button
              type="button"
              onClick={filterPostsByuser}
              className="justify-end rounded bg-blue-600 hover:bg-blue-500 p-3 mr-4 mt-2 text-gray-200"
            >
              Ver apenas meus posts
            </button>
            <button
              type="button"
              onClick={createPost}
              className="rounded bg-blue-600 hover:bg-blue-500 p-3 mr-4 mt-2 text-gray-200"
            >
              Publicar algo
            </button>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allPosts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`/posts/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.content}
                </p>
              </div>
              {post.User.email === user.email && (
                <div className="relative mt-8 flex items-center gap-x-4">
                  <button
                    type="button"
                    onClick={(() => navigateEditPost(post.id))}
                    className="rounded-full hover:bg-gray-100 p-2 mr-4"
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => deletePost(post.id)}
                    className="rounded-full hover:bg-gray-100 p-2 mr-4"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              )}
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.User.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
