import { useState, useEffect } from "react";
import Post from "./Post";

export default function PostList() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source_url = `https://jsonplaceholder.typicode.com/posts`;
    setLoading(true);
    async function getPost() {
      const response = await fetch(source_url);
      const data = await response.json();
      setPost(data);
      setLoading(false);
    }

    setTimeout(() => {
      getPost();
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="postList">
          {post.map(function (post) {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
}
