import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    // go to api and fetch data to display
    fetch('http://localhost:8000/blogs')
      .then((res) => (res.json()))
      .then((data) => {
        setBlogs(data)
        console.log(data)
      })
      console.log("hello")
  }, [])

  useEffect(() => {
    console.log('new name is:', name);
  }, [name])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      <button onClick={() => setName('luigi')}>change name</button>
      <input type="text" onChange={(e) => (setName(e.target.value))} />
    </div>
  );
}

export default Home;