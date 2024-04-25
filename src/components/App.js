import React from "react";
import blogData from "../data/blog";
import About from "./About"
import ArticleList from "./ArticleList"
import Header from "./Header"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <ArticleList posts={blogData.posts} />
      <About image={blogData.image} about={blogData.about} />
    </div>
  );
}

export default App;
