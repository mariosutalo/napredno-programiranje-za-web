import React, { useState } from 'react'

//arrow functions
const BlogList = ({blogs, title, handleDelete, handleAuthor}) => {

    function test() {
        console.log('sdsf')
    }
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                    <button onClick={() => handleAuthor(blog.author)}>Display Author</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList