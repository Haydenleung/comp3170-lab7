import { useEffect, useState } from "react";

export default function Post({ post }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const author_url = `https://jsonplaceholder.typicode.com/users/${post.userId}`;
    async function getAuthor() {
      const response = await fetch(author_url);
      const data = await response.json();
      setAuthor(data);
    }

    getAuthor();
  }, []);

  return (
    <div className="post">
      <span className="title">{post.title}</span>
      {author && (
        <p className="author">
          By{" "}
          <a className="aName" href={author.website} target="blank">
            {author.name}{" "}
          </a>
        </p>
      )}
      <span className="content">{post.body}</span>
    </div>
  );
}
