import React, { useState } from 'react'
import { blogRecord } from '../data'

const CreateNew = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const newPost = {
        id: blogRecord.length + 1, 
        title,
        desc
    };

    if(file){
        const data = new FormData()
        const filename = Date.now() +file.name;
        data.append("name", filename)
        // data.append("file", file);
        // newPost.img = filename;
        console.log("data =", data)
    }
    try {
        blogRecord.push(newPost)
    } catch (error) {}
}
  return (
    <div className=' md:w-[900px] mx-auto p-10'>
       {file && (
          <img src={URL.createObjectURL(file)}
          alt="" 
         className="w-[200px] object-cover my-5 mx-auto"
         />      
        )}
      <form onSubmit={handleSubmit}>
        <div className='w-fit border-2 p-2'>
            <label htmlFor="fileInput" className='flex items-center gap-2'>Add Image <i className="writeIcon fa-regular fa-plus"></i></label>
            <input  type="file" id="fileInput" 
                    style={{display: 'none'}} 
                    onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
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
        <button type='submit' className='bg-pink-300 px-5 my-5 py-2 rounded-md'>Publish</button>
      </form>
    </div>
  )
}

export default CreateNew
