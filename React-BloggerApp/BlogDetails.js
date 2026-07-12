import React from "react";

function BlogDetails() {

  const blogs = [
    {
      title: "React Learning",
      author: "John"
    },
    {
      title: "Installation",
      author: "David"
    }
  ];

  return (
    <div>

      <h2>Blog Details</h2>

      {blogs.map((blog, index) => (

        <div key={index}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
        </div>

      ))}

    </div>
  );
}

export default BlogDetails;
