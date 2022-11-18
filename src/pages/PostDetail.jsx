import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { blogRecord } from '../data'


const PostDetail = () => {
  const [post, setPost] = useState([]);
  const location = useLocation()
  const path = location.pathname.split('/')[2];


  useEffect(()=>{
  const getPost = () =>{
    const res = blogRecord.find(blog => blog.id === Number(path))
     console.log(res)
     setPost(res)
  } 
    getPost()
  }, [path]);
  return (
    <div className='md:px-[100px] p-10 w-[90%] mx-auto flex items-center'>
      <div>
        <h1 className='my-3'>{post.title}</h1>
        <img src={post.img} alt="" />
        <p className='my-5 text-xl'>{post.desc}</p>
      </div>
      
    </div>
  )
}

export default PostDetail
