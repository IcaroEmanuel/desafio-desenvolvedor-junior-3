import React, { useEffect, useState } from "react";
import PostsService from "../../services/PostsApi/postApi";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = async () => {
      try {
        const postsData = await PostsService.getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    return allPosts;
  }, []);

  return (
    <div class="container mx-auto px-4 bg-red">
      <h1> Posts </h1>
      {posts.map((post) => (
        <ul class="divide-y divide-gray-100 items-center" key={post.id}>
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex gap-x-4">
              {post.title}
            </div>
            <div class="sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">{ post.User.name }</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
              </p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
