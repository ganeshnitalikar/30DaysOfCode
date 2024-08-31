import React from "react";
import BlogCards from "../components/BlogCards";
function Blogs() {
  return (
    <div className="flex flex-row flex-wrap">
      <BlogCards></BlogCards>
      <BlogCards></BlogCards>
      <BlogCards></BlogCards>
      <BlogCards></BlogCards>
    </div>
  );
}

export default Blogs;
