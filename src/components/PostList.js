import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { AppContext } from "../App";

const PostList = () => {
  const { posts, deletePost } = useContext(AppContext);

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography color="textSecondary">{post.date}</Typography>
            <Typography variant="body2" component="p">
              {post.content}
            </Typography>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
