import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { AppContext } from "../App";

const PostForm = () => {
  const { addPost } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <TextField
        label="Content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Add Post
      </Button>
    </form>
  );
};

export default PostForm;
