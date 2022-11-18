import React from 'react'
import { Link } from 'react-router-dom'

const PostComponent = ({id, title, desc, img}) => {
  return (
    <Link to={`/blog/${id}`} className='link '>
      <div className='flex  md:flex-row flex-col-reverse border-b-2 '>
      <div className='flex-[80%] p-5'>
      <div className='text-gray-300'>
        <span className='mr-5'>BY: ONYEKACHI</span>
        <span className='mr-5'>PUBLISHED: 4 mins ago</span>
      </div>
        <h1 className='text-[#000333] md:text-5xl my-4'>{title}</h1>
        <p className='text-[#001122] text-[1.2rem] line-clamp-4'>{desc}</p>

        <span className='mr-5 text-gray-300'>Source: Interview Test</span> <br />

        <p className='text-[1rem] my-3'>Read more...</p>
      </div>
      <div className='flex-[20%] flex justify-center items-center'>
      <img src={img} alt="" className='w-[100%]' />
      </div>
      </div>
    </Link>
  )
}

export default PostComponent
