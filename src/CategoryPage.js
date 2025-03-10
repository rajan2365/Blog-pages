import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from './component/Header';
import Blogs from './component/Blogs';
import Pegination from './component/Pegination';

export const CategoryPage = () => {
    const navigation=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
  return (
    <div>
   <Header/>
   <div>
    <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={()=>navigation(-1)}>
   Back
    </button>
    <h2>
        Blogs on <span>{category}</span>
    </h2>
   </div>
   <Blogs/>
   <Pegination/>
    </div>
  )
}
