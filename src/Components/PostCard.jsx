import React from 'react';
import appwriteService from '../Appwrite/config2';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 transform hover:scale-105 transition-transform duration-500' >
        <div className='w-full justify-center mb-1'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
          className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold text-black'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
