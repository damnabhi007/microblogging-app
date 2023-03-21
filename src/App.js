import React, { createContext, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export const AppContext = createContext();

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    const newPost = { ...post, date: new Date().toLocaleString(), id: Date.now() };
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <AppContext.Provider value={{ posts, addPost, deletePost }}>
      <div>
        <h1>Microblogging App</h1>
        <PostForm />
        <PostList />
      </div>
    </AppContext.Provider>
  );
};

export default App;

