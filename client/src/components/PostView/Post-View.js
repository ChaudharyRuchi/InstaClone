import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

import axios from "axios";

const PostView = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://rcinsta-clone.herokuapp.com/").then((res) => {
      setPosts(res.data.reverse());
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="post-container">
        {posts.map((post, i) => {
          return <Card post={post} key={i} />;
        })}
      </div>
    </div>
  );
};
export default PostView;
