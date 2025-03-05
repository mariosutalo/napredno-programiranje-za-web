import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)

    return (
        <div>
            {/* ako je error true onda ce se vratiti error loading page */}
            {error && <p>Error loading page</p>}
            {isPending && <p>Loading...</p>}
            {blog && 
                <article>
                    <h1>{blog.title}</h1>
                    <h2>{blog.author}</h2>
                    <p>{blog.body}</p>
                </article>
            }
        </div>
    )
}

export default BlogDetails