import { useState, useEffect } from "react"; 

import BlogList from '../pages/BlogList';

import BlogDetails from "./BlogDetails";

 

const Home = () => { 

 

    const [blogs, setBlogs] = useState(null) 

    const [url, setUrl] = useState('http://localhost:8000/blogs') 

  

    useEffect(() => { 

        fetch(url) 

            .then((res) => res.json()) 

            .then((data) => setBlogs(data)) 

    }, [url]) 

 

    return (  

        <div className="content"> 

            { blogs && <BlogList blogs={blogs} />} 

        </div> 

     ); 

} 

export default Home; 