import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import "./CreatePost.css";

const CreatePost = () => {
  const [post, setPost] = useState({});
  const navigator = useNavigate();
  const postData = async (e) => {
    e.preventDefault();
    console.log(post);
    const formData = new FormData();
    formData.append("image", post.image);
    formData.append("name", post.name);
    formData.append("location", post.location);
    formData.append("description", post.description);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    await axios
      .post("https://rcinsta-clone.herokuapp.com/uploads", formData, config)
      .then((res) => {
        console.log("post", res);
      })
      .catch((err) => console.log(err));

    navigator("/post");
  };

  return (
    <div>
      <Header />
      <div id="form-data">
        <form method="post" onSubmit={postData}>
          <input
            id="file-container"
            type="file"
            onChange={(e) => setPost({ ...post, image: e.target.files[0] })}
            name="image"
          />
          <br></br>

          <input
            id="name-container"
            type="text"
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            placeholder="Author"
            name="name"
          />

          <input
            id="location-container"
            type="text"
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            placeholder="Location"
            name="location"
          />
          <br></br>

          <input
            id="description-container"
            type="text"
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder="Description"
            name="description"
          />
          <br></br>

          <button id="post-submit" type="submit">
            POST
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
