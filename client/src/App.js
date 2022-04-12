import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetail.js/PostDetails";

const App = () => {
  const user=JSON.parse(localStorage.getItem('profile'))
  console.log(user);
  return (
    <>
      <Router>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Navigate replace to="/posts"/>} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id"  exact element={<PostDetails />} />
            <Route path="/auth" exact element={user!=null?<Navigate replace to="/posts"/>:<Auth/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
