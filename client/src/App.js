import React from "react";
import "./App.css";
import PostView from "./components/PostView/Post-View";
import LandingPage from "./components/Landing-Page/Landing-Page";
import CreatePost from "./components/PostView/CreatePost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/post" element={<PostView />}></Route>
          <Route path="/createPost" element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
