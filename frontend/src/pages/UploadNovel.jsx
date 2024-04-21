import React from 'react'
import { useState } from 'react';

const UploadNovel = () => {
    const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [summary,setSummary] = useState('');
  const [content, setContent] = useState('');

  const [file, setFile] = useState(null);
  return (
    <div className="bg-green-300 min-h-screen ">
        <h1 className='font-bold'>Upload new novel:</h1>
        <br/>
        <img></img>
        <div className="col-span-2">
          <label>Upload image:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="block w-full mt-1" />
        </div>
      <div className=" grid grid-cols-2 gap-0 w-full md:w-1/2">
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block  mt-1" />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="block mt-1" />
        </div>
        <div>
        <label>Genre:</label>
        <br/>
        <select value={genre} onChange={(e)=>{setGenre(e.target.value);}}>
          <option value="">Select genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Sci-Fi</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Horror">Horror</option>
          <option value="Non-Fiction">Non-Fiction</option>

          {/* Add more options as needed */}
        </select>
      </div>
        <div>
          <label>Release Year:</label>
          <input type="text" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} className="block  mt-1" />
        </div>
        
      </div>
      
      <div>
          <label>Summary</label>
          <br/>
          <textarea type="text" value={summary} onChange={(e)=>{setSummary(e.target.value);}}></textarea>
        </div>
        <div>
          <label>Content</label>
          <br/>
          <textarea type="text" value={content} onChange={(e)=>{setContent(e.target.value);}}></textarea>
        </div> 
      <button  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload Novel
      </button>
    </div>
      
   
  )
}

export default UploadNovel
