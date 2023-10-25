import { useEffect, useState } from "react";
// import Post from "./components/Post";
import PostList from "./components/PostList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="big">Recent Posts</h1>
      <PostList />
    </div>
  );
}
