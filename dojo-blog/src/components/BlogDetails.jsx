import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const deletePost = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE',
        }).then(()=> {
            history.push('')
        })
    }

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
                    <button onClick={deletePost}>Delete</button>
                </article>
            }
        </div>
    )
}

export default BlogDetails