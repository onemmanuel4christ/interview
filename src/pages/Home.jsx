import React, { useState } from 'react'
import { blogRecord } from '../data'
import PostComponent from '../components/PostComponent'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [posts, setPost] = useState(blogRecord)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) =>{
    e.preventDefault();
        const newPost = {
        id: blogRecord.length + 1, 
        title,
        desc,
    };

    if(file){
        const data = new FormData()
        const filename = Date.now() +file.name;
        data.append("name", filename)
        data.append("file", file);
        newPost.img = filename;
        try {
        } catch (error) { }
    }
    try {
        blogRecord.push(newPost)
        console.log(blogRecord)
    } catch (error) {}

    handleClose()
    
}
  return (
    <div>
       <Button variant="primary" onClick={handleShow} className="mx-20 mt-5">
        Add New Blog
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mx-auto p-10'>
       {file && (
          <img src={URL.createObjectURL(file)}
          alt="" 
         className="w-[150px] object-cover my-5 mx-auto"
         />      
        )}
      <form onSubmit={handleSubmit}>
        <div className='w-fit border-2 p-2'>
            <label htmlFor="fileInput" className='flex items-center gap-2'>Add Image <i className="writeIcon fa-regular fa-plus"></i></label>
            <input  type="file" id="fileInput" 
                    style={{display: 'none'}} 
                    onChange={(e) => setFile(e.target.files[0])}
                    />
        </div>

        <div className='w-[100%]'>
            <input type="text" placeholder='Enter title' 
            className='w-full outline-none border-2 p-2 rounded-md my-5' 
            autoFocus={true} 
            onChange={e =>setTitle(e.target.value)}
            />
        </div>

        <div className='w-[100%]'>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enetr your story' 
            className='w-full outline-none border-2 rounded-md p-2'
            onChange={e =>setDesc(e.target.value)}
            ></textarea>
        </div>
        <Button type='submit'variant="primary" className='px-5 my-5 py-2 rounded-md'>Publish</Button>
      </form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
       <div className='flex p-10 justify-center md:flex-row flex-col gap-10'>
        <div className='flex-[70%] '>
            {posts.map(post =>(
                <PostComponent key={post.id}
                 id={post.id}
                 title={post.title}
                 desc={post.desc}
                 img={post.img}
                />

            ))}
        </div>
        <div className='flex-[30%] border-l-2 p-4 my-2'>
          <h5>Hot Gist</h5>
        <div className='w-[100%] p-2 border-2 rounded-md overflow-hidden my-2'>
              <input type="text" placeholder='Search Here...' className='w-full outline-none' />
        </div>
        <div className='my-2'>
          <h5>Category</h5>
          <ul>
            <li>Education</li>
            <li>Politics</li>
            <li>Technology</li>
            <li>Business</li>
            <li>Gossips</li>
            <li>Random</li>
          </ul>
        </div>
        <div className='my-2'>
          <h5>Advert</h5>
          <img src="https://image.shutterstock.com/image-vector/business-webinar-horizontal-banner-template-260nw-2041227701.jpg" alt="" />
        </div>
        <div className='my-2'>
          <h5>About Me</h5>
        </div>
        </div>
    </div>
    </div>
   
  )
}

export default Home
